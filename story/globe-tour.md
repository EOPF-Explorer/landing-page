---
title: Globe Tour
layout: page
---

<div ref="containerRef" class="globe-tour-fullscreen">
    <ClientOnly>
        <GlobeTour
            v-if="tourConfig"
            :tour-script="tourConfig.tourScript"
            :openeo-base-url="tourConfig.openeoBaseUrl || undefined"
            :default-layer-params="tourConfig.defaultLayerParams || undefined"
            :cesium-ion-token="tourConfig.cesiumIonToken || undefined"
        />
        <div v-else-if="loadError" class="tour-error">
            <p>Failed to load tour configuration.</p>
            <p class="tour-error-detail">{{ loadError }}</p>
        </div>
        <div v-else class="tour-loading">Loading tour...</div>
    </ClientOnly>
</div>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GlobeTour from '../.vitepress/components/GlobeTour.vue'
import defaultTourScript from './default-tour.js'

const tourConfig = ref(null)
const loadError = ref(null)
const containerRef = ref(null)

// Hide VitePress chrome for iframe-friendly fullscreen experience
let injectedStyle = null

onMounted(async () => {
    // Inject style to hide VitePress chrome
    injectedStyle = document.createElement('style')
    injectedStyle.id = 'globe-tour-hide-chrome'
    injectedStyle.textContent = `
        header,
        footer,
        nav.top-nav,
        .VPNav,
        .VPSidebar,
        .VPNavBar,
        .top-nav,
        [class*="cookie"],
        [class*="Cookie"] {
            display: none !important;
        }
        body {
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
        }
        .VPContent,
        .vp-doc,
        main {
            padding-top: 0 !important;
            margin-top: 0 !important;
            max-width: 100% !important;
        }
        .VPContent .container {
            max-width: 100% !important;
        }
    `
    document.head.appendChild(injectedStyle)

    // Read ?config=<url> query parameter
    const params = new URLSearchParams(window.location.search)
    const configUrl = params.get('config')

    if (configUrl) {
        try {
            const response = await fetch(configUrl)
            if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)
            const config = await response.json()

            // Validate minimal structure
            if (!config.tourScript || !Array.isArray(config.tourScript) || config.tourScript.length === 0) {
                throw new Error('Config must contain a non-empty "tourScript" array.')
            }
            tourConfig.value = config
        } catch (err) {
            console.error('Failed to load tour config:', err)
            loadError.value = `${err.message} (URL: ${configUrl})`
        }
    } else {
        // Use built-in default tour
        tourConfig.value = { tourScript: defaultTourScript }
    }
})

onUnmounted(() => {
    if (injectedStyle) {
        injectedStyle.remove()
        injectedStyle = null
    }
})
</script>

<style scoped>
.globe-tour-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: #000;
}

.tour-loading,
.tour-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 18px;
}

.tour-error-detail {
    font-size: 13px;
    opacity: 0.6;
    margin-top: 8px;
    max-width: 600px;
    text-align: center;
    word-break: break-all;
}
</style>
