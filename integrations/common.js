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