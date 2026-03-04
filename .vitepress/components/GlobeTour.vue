<template>
    <div class="tour-container">
        <div ref="mapRef" class="map-fullscreen"></div>

        <!-- Loading progress bar -->
        <div v-if="isLoadingTiles" class="loading-overlay">
            <div class="loading-container">
                <div class="loading-text">Loading imagery...</div>
                <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: tileLoadProgress + '%' }"></div>
                </div>
                <div class="progress-text">{{ Math.round(tileLoadProgress) }}%</div>
            </div>
        </div>

        <!-- Tour info overlay -->
        <div class="tour-overlay">
            <div class="tour-info">
                <div v-if="currentStepLabel" class="tour-label">{{ currentStepLabel }}</div>
                <a v-if="currentSourceLink" :href="currentSourceLink" target="_blank" rel="noopener noreferrer"
                    class="tour-attribution">
                    {{ currentSourceLabel }}
                </a>
                <span v-else-if="currentSourceLabel" class="tour-attribution">{{ currentSourceLabel }}</span>
                <span class="tour-step-counter">{{ currentTourStep + 1 }} / {{ resolvedTourScript.length }}</span>
            </div>
        </div>

        <!-- Playback controls -->
        <div class="playback-controls">
            <button class="control-btn" @click="prevStep" title="Previous step">⏮</button>
            <button class="control-btn" @click="togglePause" :title="isPaused ? 'Play' : 'Pause'">
                {{ isPaused ? '▶' : '⏸' }}
            </button>
            <button class="control-btn" @click="nextStep" title="Next step">⏭</button>
            <select v-if="sectionEntries.length > 0" class="section-jump"
                @change="jumpToSection($event.target.value)" :value="''">
                <option value="" disabled>Jump to...</option>
                <option v-for="entry in sectionEntries" :key="entry.index" :value="entry.index">
                    {{ entry.label }}
                </option>
            </select>
            <button class="control-btn debug-btn" @click="toggleDebug" :class="{ active: debugMode }"
                title="Debug mode">
                🛠
            </button>
        </div>

        <!-- Debug panel -->
        <div v-if="debugMode" class="debug-panel">
            <div class="debug-header">Camera Position (click to copy)</div>
            <pre class="debug-code" @click="copyDebugInfo">{{ debugCameraInfo }}</pre>
            <div class="debug-hint">{{ debugCopied ? 'Copied!' : 'Use mouse to navigate, click above to copy' }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, onUnmounted, watch } from 'vue'

// ─── Props ───────────────────────────────────────────────────────
const props = defineProps({
    tourScript: {
        type: Array,
        default: () => [],
    },
    openeoBaseUrl: {
        type: String,
        default: 'https://api.explorer.eopf.copernicus.eu/openeo/services/xyz',
    },
    defaultLayerParams: {
        type: Object,
        default: () => ({
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: null,
            timeEnd: null,
            cloudCover: null,
            additionalParams: '',
        }),
    },
    cesiumIonToken: {
        type: String,
        default: '',
    },
})

// ─── Time helper functions ───────────────────────────────────────
const formatDate = (date) => date.toISOString().split('T')[0]
const timeHelpers = {
    $today: () => formatDate(new Date()),
    $yesterday: () => formatDate(new Date(Date.now() - 24 * 60 * 60 * 1000)),
}

/** Resolve date tokens like "$today", "$yesterday", "$daysAgo(28)", "$daysFromNow(7)" */
function resolveTimeToken(val) {
    if (typeof val !== 'string' || !val.startsWith('$')) return val
    if (timeHelpers[val]) return timeHelpers[val]()
    const daysAgoMatch = val.match(/^\$daysAgo\((\d+)\)$/)
    if (daysAgoMatch) return formatDate(new Date(Date.now() - Number(daysAgoMatch[1]) * 86400000))
    const daysFromNowMatch = val.match(/^\$daysFromNow\((\d+)\)$/)
    if (daysFromNowMatch) return formatDate(new Date(Date.now() + Number(daysFromNowMatch[1]) * 86400000))
    return val
}

/** Deep-resolve time tokens inside the tour script */
function resolveScript(script) {
    return script.map((step) => {
        const s = { ...step }
        if (s.layer) {
            s.layer = { ...s.layer }
            if (s.layer.timeStart) s.layer.timeStart = resolveTimeToken(s.layer.timeStart)
            if (s.layer.timeEnd) s.layer.timeEnd = resolveTimeToken(s.layer.timeEnd)
        }
        return s
    })
}

// ─── Resolved tour script (with time tokens expanded) ───────────
const resolvedTourScript = computed(() => resolveScript(props.tourScript))

// Effective default layer params (merge with time defaults)
const effectiveDefaultLayerParams = computed(() => {
    const p = { ...props.defaultLayerParams }
    if (!p.timeStart) p.timeStart = formatDate(new Date(Date.now() - 86400000)) // yesterday
    if (!p.timeEnd) p.timeEnd = formatDate(new Date()) // today
    return p
})

// ─── Auto-generated section index from steps with `section` field ─
const sectionEntries = computed(() => {
    const entries = []
    resolvedTourScript.value.forEach((step, idx) => {
        if (step.section) {
            entries.push({ index: idx, label: step.section })
        }
    })
    return entries
})

// ─── Core state ──────────────────────────────────────────────────
const mapRef = ref(null)
const currentTourStep = ref(0)
const isLoadingTiles = ref(false)
const tileLoadProgress = ref(0)
const isPaused = ref(false)
const debugMode = ref(false)
const debugCopied = ref(false)
const cameraPosition = ref({ lon: 0, lat: 0, alt: 0, heading: 0, pitch: 0, roll: 0 })

// Cesium instances (non-reactive)
let cesiumViewer = null
let Cesium = null
let pauseTimeoutId = null
let isDestroyed = false
let currentXyzLayer = null
let currentLayerParams = null

// ─── Computed labels ─────────────────────────────────────────────
const currentStepLabel = computed(() => {
    const step = resolvedTourScript.value[currentTourStep.value]
    return step?.label || ''
})

// Sticky sourceLabel — persists until overridden by a later step
const currentSourceLabel = computed(() => {
    for (let i = currentTourStep.value; i >= 0; i--) {
        const step = resolvedTourScript.value[i]
        if (step?.sourceLabel !== undefined) return step.sourceLabel
    }
    return ''
})

// Sticky sourceLink
const currentSourceLink = computed(() => {
    for (let i = currentTourStep.value; i >= 0; i--) {
        const step = resolvedTourScript.value[i]
        if (step?.sourceLink !== undefined) return step.sourceLink
    }
    return ''
})

// ─── Layer helpers ───────────────────────────────────────────────
function layerParamsEqual(a, b) {
    if (!a && !b) return true
    if (!a || !b) return false
    return a.serviceId === b.serviceId &&
        a.timeStart === b.timeStart &&
        a.timeEnd === b.timeEnd &&
        a.cloudCover === b.cloudCover &&
        a.additionalParams === b.additionalParams
}

function buildXYZUrl(params) {
    const p = { ...effectiveDefaultLayerParams.value, ...params }
    let url = `${props.openeoBaseUrl}/${p.serviceId}/tiles/{z}/{x}/{y}`
    const queryParams = []

    if (p.timeStart && p.timeEnd) {
        const timeArray = JSON.stringify([p.timeStart, p.timeEnd])
        queryParams.push(`time=${encodeURIComponent(timeArray)}`)
    }
    if (p.cloudCover !== null && p.cloudCover !== '') {
        queryParams.push(`cloud_cover=${p.cloudCover}`)
    }
    if (p.additionalParams) {
        queryParams.push(p.additionalParams)
    }
    if (queryParams.length > 0) {
        url += '?' + queryParams.join('&')
    }
    return url
}

function updateXYZLayer(params) {
    if (!cesiumViewer || !Cesium) return

    const newParams = { ...effectiveDefaultLayerParams.value, ...params }
    if (layerParamsEqual(currentLayerParams, newParams)) return

    currentLayerParams = { ...newParams }

    if (currentXyzLayer) {
        cesiumViewer.imageryLayers.remove(currentXyzLayer)
    }

    const url = buildXYZUrl(newParams)
    console.log('Tour XYZ URL:', url)

    const imageryProvider = new Cesium.UrlTemplateImageryProvider({
        url,
        minimumLevel: 0,
        maximumLevel: 18,
    })

    currentXyzLayer = cesiumViewer.imageryLayers.addImageryProvider(imageryProvider)
}

// ─── Globe initialisation ────────────────────────────────────────
async function initializeMap() {
    if (!mapRef.value) return

    // Cesium base URL — points to the static-copied assets
    window.CESIUM_BASE_URL = import.meta.env.DEV
        ? '/node_modules/cesium/Build/Cesium/'
        : `${import.meta.env.BASE_URL || '/'}cesium/`

    // Dynamic import for Cesium
    Cesium = await import('cesium')
    await import('cesium/Build/Cesium/Widgets/widgets.css')

    // Cesium Ion token: prop > env var > none
    const token = props.cesiumIonToken || import.meta.env.VITE_CESIUM_ION_TOKEN || ''
    if (token) {
        Cesium.Ion.defaultAccessToken = token
    }

    // Terrain: use Cesium World Terrain when token is available, else ellipsoid
    let terrainProvider
    if (token) {
        try {
            terrainProvider = await Cesium.CesiumTerrainProvider.fromIonAssetId(1)
        } catch (e) {
            console.warn('Failed to load Cesium Ion terrain, falling back to ellipsoid:', e)
            terrainProvider = undefined
        }
    }

    // Create viewer
    const viewerOptions = {
        baseLayerPicker: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
        fullscreenButton: false,
        vrButton: false,
        infoBox: false,
        selectionIndicator: false,
        scene3DOnly: true,
        baseLayer: false,
    }
    if (terrainProvider) viewerOptions.terrainProvider = terrainProvider

    cesiumViewer = new Cesium.Viewer(mapRef.value, viewerOptions)

    // Dark OSM base layer
    const darkOsmProvider = new Cesium.UrlTemplateImageryProvider({
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd'],
        minimumLevel: 0,
        maximumLevel: 18,
        credit: '© OpenStreetMap contributors, © CARTO',
    })
    cesiumViewer.imageryLayers.addImageryProvider(darkOsmProvider)

    // Disable user camera controls for tour mode
    const ctrl = cesiumViewer.scene.screenSpaceCameraController
    ctrl.enableRotate = false
    ctrl.enableZoom = false
    ctrl.enablePan = false
    ctrl.enableTilt = false
    ctrl.enableLook = false

    // Set initial camera position from first step
    const firstStep = resolvedTourScript.value[0]
    if (firstStep) {
        cesiumViewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(firstStep.lon, firstStep.lat, firstStep.alt),
            orientation: {
                heading: Cesium.Math.toRadians(firstStep.heading || 0),
                pitch: Cesium.Math.toRadians(firstStep.pitch || -90),
                roll: Cesium.Math.toRadians(firstStep.roll || 0),
            },
        })
        updateXYZLayer(firstStep.layer || {})
    }

    // Start tour after brief delay
    await nextTick()
    setTimeout(startTour, 1000)
}

// ─── Tour execution ──────────────────────────────────────────────
function startTour() {
    currentTourStep.value = 0
    executeTourStep()
}

function waitForTilesLoaded(timeout = 30000) {
    return new Promise((resolve) => {
        const waitTime = 2000
        const startTime = Date.now()

        isLoadingTiles.value = true
        tileLoadProgress.value = 0

        const updateProgress = () => {
            if (isDestroyed) {
                isLoadingTiles.value = false
                resolve()
                return
            }
            const elapsed = Date.now() - startTime
            const progress = Math.min((elapsed / waitTime) * 100, 100)
            tileLoadProgress.value = progress

            if (elapsed >= waitTime) {
                tileLoadProgress.value = 100
                setTimeout(() => {
                    isLoadingTiles.value = false
                    resolve()
                }, 50)
            } else {
                requestAnimationFrame(updateProgress)
            }
        }
        requestAnimationFrame(updateProgress)
    })
}

function executeTourStep() {
    if (isDestroyed || !cesiumViewer || !Cesium) return

    const step = resolvedTourScript.value[currentTourStep.value]
    if (!step) return

    if (step.layer) updateXYZLayer(step.layer)

    cesiumViewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(step.lon, step.lat, step.alt),
        orientation: {
            heading: Cesium.Math.toRadians(step.heading || 0),
            pitch: Cesium.Math.toRadians(step.pitch || -90),
            roll: Cesium.Math.toRadians(step.roll || 0),
        },
        duration: step.duration || 3,
        easingFunction: Cesium.EasingFunction.LINEAR_NONE,
        complete: async () => {
            if (isDestroyed) return

            if (step.waitForTiles) {
                await waitForTilesLoaded(step.tileTimeout || 30000)
            }

            const pauseTime = (step.pause || 0) * 1000
            if (pauseTimeoutId) clearTimeout(pauseTimeoutId)
            if (isPaused.value) return

            pauseTimeoutId = setTimeout(() => {
                if (isDestroyed || isPaused.value) return
                currentTourStep.value++
                if (currentTourStep.value >= resolvedTourScript.value.length) {
                    currentTourStep.value = 0
                }
                executeTourStep()
            }, pauseTime)
        },
    })
}

// ─── Playback controls ──────────────────────────────────────────
function togglePause() {
    isPaused.value = !isPaused.value
    if (!isPaused.value) {
        // Resume — advance to next step
        currentTourStep.value++
        if (currentTourStep.value >= resolvedTourScript.value.length) {
            currentTourStep.value = 0
        }
        executeTourStep()
    } else {
        // Pause — cancel any in-flight animation and pending timeout
        if (cesiumViewer) cesiumViewer.camera.cancelFlight()
        if (pauseTimeoutId) {
            clearTimeout(pauseTimeoutId)
            pauseTimeoutId = null
        }
    }
}

function prevStep() {
    if (cesiumViewer) cesiumViewer.camera.cancelFlight()
    if (pauseTimeoutId) { clearTimeout(pauseTimeoutId); pauseTimeoutId = null }
    isPaused.value = true
    currentTourStep.value = currentTourStep.value > 0
        ? currentTourStep.value - 1
        : resolvedTourScript.value.length - 1
    executeTourStep()
}

function nextStep() {
    if (cesiumViewer) cesiumViewer.camera.cancelFlight()
    if (pauseTimeoutId) { clearTimeout(pauseTimeoutId); pauseTimeoutId = null }
    isPaused.value = true
    currentTourStep.value = currentTourStep.value < resolvedTourScript.value.length - 1
        ? currentTourStep.value + 1
        : 0
    executeTourStep()
}

function jumpToSection(stepIndex) {
    if (cesiumViewer) cesiumViewer.camera.cancelFlight()
    if (pauseTimeoutId) { clearTimeout(pauseTimeoutId); pauseTimeoutId = null }
    isPaused.value = true
    currentTourStep.value = parseInt(stepIndex, 10)
    executeTourStep()
}

// ─── Debug mode ─────────────────────────────────────────────────
const debugCameraInfo = computed(() => {
    const p = cameraPosition.value
    return `{ lon: ${p.lon.toFixed(4)}, lat: ${p.lat.toFixed(4)}, alt: ${Math.round(p.alt)}, heading: ${Math.round(p.heading)}, pitch: ${Math.round(p.pitch)}, roll: ${Math.round(p.roll)}, duration: 4, pause: 3 }`
})

let cameraChangeHandler = null

function toggleDebug() {
    debugMode.value = !debugMode.value
    if (!cesiumViewer || !Cesium) return

    const controller = cesiumViewer.scene.screenSpaceCameraController

    if (debugMode.value) {
        controller.enableRotate = true
        controller.enableZoom = true
        controller.enablePan = true
        controller.enableTilt = true
        controller.enableLook = true

        isPaused.value = true
        if (pauseTimeoutId) clearTimeout(pauseTimeoutId)

        updateCameraPosition()
        cameraChangeHandler = cesiumViewer.camera.changed.addEventListener(updateCameraPosition)
    } else {
        controller.enableRotate = false
        controller.enableZoom = false
        controller.enablePan = false
        controller.enableTilt = false
        controller.enableLook = false

        if (cameraChangeHandler) {
            cameraChangeHandler()
            cameraChangeHandler = null
        }
    }
}

function updateCameraPosition() {
    if (!cesiumViewer || !Cesium) return
    const camera = cesiumViewer.camera
    const cartographic = Cesium.Cartographic.fromCartesian(camera.position)
    cameraPosition.value = {
        lon: Cesium.Math.toDegrees(cartographic.longitude),
        lat: Cesium.Math.toDegrees(cartographic.latitude),
        alt: cartographic.height,
        heading: Cesium.Math.toDegrees(camera.heading),
        pitch: Cesium.Math.toDegrees(camera.pitch),
        roll: Cesium.Math.toDegrees(camera.roll),
    }
}

function copyDebugInfo() {
    navigator.clipboard.writeText(debugCameraInfo.value)
    debugCopied.value = true
    setTimeout(() => { debugCopied.value = false }, 2000)
}

// ─── Lifecycle ───────────────────────────────────────────────────
onMounted(async () => {
    if (resolvedTourScript.value.length > 0) {
        await initializeMap()
    }
})

onUnmounted(() => {
    isDestroyed = true
    if (pauseTimeoutId) clearTimeout(pauseTimeoutId)
    if (cameraChangeHandler) cameraChangeHandler()
    if (cesiumViewer) {
        cesiumViewer.destroy()
        cesiumViewer = null
    }
})

// Re-init if tourScript prop changes after mount
watch(() => props.tourScript, async (newScript) => {
    if (newScript?.length && !cesiumViewer) {
        await initializeMap()
    }
}, { deep: false })
</script>

<style scoped>
.tour-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.map-fullscreen {
    width: 100%;
    height: 100%;
}

.tour-overlay {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    pointer-events: none;
}

.tour-info {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 12px 24px;
    border-radius: 20px;
    font-size: 14px;
    backdrop-filter: blur(10px);
    pointer-events: auto;
    text-align: center;
    min-width: 200px;
}

.tour-label {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
}

.tour-attribution {
    display: block;
    font-size: 12px;
    opacity: 0.8;
    margin-bottom: 6px;
    color: #88ccff;
    text-decoration: none;
    pointer-events: auto;
}

.tour-attribution:hover {
    opacity: 1;
    text-decoration: underline;
}

.tour-step-counter {
    font-size: 12px;
    opacity: 0.7;
}

/* Loading progress bar */
.loading-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    pointer-events: none;
}

.loading-container {
    background: rgba(0, 0, 0, 0.8);
    padding: 20px 40px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    text-align: center;
    min-width: 250px;
}

.loading-text {
    color: white;
    font-size: 14px;
    margin-bottom: 12px;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 3px;
    transition: width 0.1s ease-out;
}

.progress-text {
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    margin-top: 8px;
}

/* Hide Cesium credits for cleaner look */
:deep(.cesium-viewer-bottom) {
    display: none !important;
}

/* Playback controls */
.playback-controls {
    position: absolute;
    bottom: 130px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    display: flex;
    gap: 8px;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    padding: 8px 12px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
}

.control-btn {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    max-width: 36px;
    max-height: 36px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-sizing: border-box;
}

.control-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

.section-jump {
    height: 32px;
    padding: 0 10px;
    border: none;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 13px;
    cursor: pointer;
    margin-left: 8px;
}

.section-jump option {
    background: #222;
    color: white;
}

.debug-btn.active {
    background: rgba(76, 175, 80, 0.6);
}

/* Debug panel */
.debug-panel {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.85);
    padding: 12px 16px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
    max-width: 500px;
    font-family: monospace;
}

.debug-header {
    color: #4facfe;
    font-size: 12px;
    margin-bottom: 8px;
    font-weight: bold;
}

.debug-code {
    color: #90EE90;
    font-size: 11px;
    margin: 0;
    padding: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    cursor: pointer;
    user-select: all;
    white-space: pre-wrap;
    word-break: break-all;
}

.debug-code:hover {
    background: rgba(255, 255, 255, 0.2);
}

.debug-hint {
    color: rgba(255, 255, 255, 0.6);
    font-size: 10px;
    margin-top: 8px;
}
</style>
