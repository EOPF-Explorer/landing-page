/**
 * Common utilities for integration pages
 */

// Function to wait for OpenLayers to load
window.waitForOpenLayers = function() {
  return new Promise((resolve) => {
    if (typeof window.ol !== 'undefined') {
      resolve()
      return
    }
    
    const checkInterval = setInterval(() => {
      if (typeof window.ol !== 'undefined') {
        clearInterval(checkInterval)
        resolve()
      }
    }, 100)
    
    // Timeout after 10 seconds
    setTimeout(() => {
      clearInterval(checkInterval)
      console.error('OpenLayers failed to load within 10 seconds')
      resolve()
    }, 10000)
  })
}

// Common copy URL functionality
window.createCopyUrlFunction = function(buildTileUrlFn) {
  return function(copyButtonText, copyButtonClass) {
    const url = buildTileUrlFn()
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url)
        .then(() => {
          copyButtonText.value = '✅ Copied!'
          copyButtonClass.value = 'copy-button copied'
          setTimeout(() => {
            copyButtonText.value = '📋 Copy URL'
            copyButtonClass.value = 'copy-button'
          }, 2000)
        })
        .catch((err) => {
          console.error('Failed to copy: ', err)
          copyButtonText.value = '❌ Failed'
          setTimeout(() => {
            copyButtonText.value = '📋 Copy URL'
          }, 2000)
        })
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        copyButtonText.value = '✅ Copied!'
        copyButtonClass.value = 'copy-button copied'
      } catch (err) {
        console.error('Fallback copy failed: ', err)
        copyButtonText.value = '❌ Failed'
      }
      document.body.removeChild(textArea)
      setTimeout(() => {
        copyButtonText.value = '📋 Copy URL'
        copyButtonClass.value = 'copy-button'
      }, 2000)
    }
  }
}

// Load OpenLayers from CDN if not already loaded
if (typeof window.ol === 'undefined') {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/ol@9.1.0/dist/ol.js'
  script.async = true
  script.onload = () => {
    console.log('OpenLayers loaded successfully')
  }
  script.onerror = () => {
    console.error('Failed to load OpenLayers')
  }
  document.head.appendChild(script)
  
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://cdn.jsdelivr.net/npm/ol@9.1.0/ol.css'
  document.head.appendChild(link)
}

// OpenLayers-specific utilities
window.checkWebGLSupport = function() {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  return gl !== null
}

// Common Zarr URLs for examples
window.ZARR_URLS = {
  sentinel2: 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr'
}

// Common NDVI color scale utilities
window.createNDVIVariables = function(minColor, maxColor, minValue, maxValue, segments = 10) {
  if (typeof window.chroma === 'undefined') {
    console.error('Chroma.js not loaded')
    return {}
  }
  
  const variables = {}
  const scale = window.chroma.scale([minColor, maxColor]).mode('lab')
  const delta = (maxValue - minValue) / segments

  for (let i = 0; i <= segments; ++i) {
    const color = scale(i / segments).rgb()
    const value = minValue + i * delta
    variables[`value${i}`] = value
    variables[`red${i}`] = color[0]
    variables[`green${i}`] = color[1]
    variables[`blue${i}`] = color[2]
  }
  
  return variables
}

// Generate NDVI expression for WebGL
window.generateNDVIExpression = function(segments = 10) {
  let expression = 'vec4(0.0, 0.0, 0.0, 1.0)'
  
  for (let i = segments; i >= 0; --i) {
    const condition = i === segments 
      ? `ndvi >= value${i}`
      : i === 0
      ? `ndvi < value${i + 1}`
      : `ndvi >= value${i} && ndvi < value${i + 1}`
    
    expression = `${condition} ? vec4(red${i}/255.0, green${i}/255.0, blue${i}/255.0, 1.0) : ${expression}`
  }
  
  return expression
}