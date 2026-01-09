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
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      try {
        document.execCommand('copy')
        copyButtonText.value = '✅ Copied!'
        copyButtonClass.value = 'copy-button copied'
        setTimeout(() => {
          copyButtonText.value = '📋 Copy URL'
          copyButtonClass.value = 'copy-button'
        }, 2000)
      } catch (err) {
        console.error('Fallback copy failed: ', err)
        copyButtonText.value = '❌ Failed'
        setTimeout(() => {
          copyButtonText.value = '📋 Copy URL'
        }, 2000)
      } finally {
        document.body.removeChild(textArea)
      }
    }
  }
}

// WebGL support detection
window.checkWebGLSupport = function() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return gl !== null && gl !== undefined
  } catch (e) {
    return false
  }
}

// Format numbers for display
window.formatNumber = function(num, decimals = 2) {
  if (typeof num !== 'number' || isNaN(num)) {
    return '0'
  }
  
  if (Math.abs(num) >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (Math.abs(num) >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  } else {
    return num.toFixed(decimals)
  }
}

// Debounce function for input handlers
window.debounce = function(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Common error handler
window.handleError = function(error, context = 'Operation') {
  console.error(`${context} failed:`, error)
  
  // Show user-friendly error message
  const errorMessage = error.message || error.toString() || 'Unknown error occurred'
  
  // You can customize this to show toast notifications, modals, etc.
  if (typeof window.showNotification === 'function') {
    window.showNotification(`${context} failed: ${errorMessage}`, 'error')
  } else {
    // Fallback to alert for now
    alert(`${context} failed: ${errorMessage}`)
  }
  
  return errorMessage
}

// Local storage helpers with error handling
window.storageHelpers = {
  set: function(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (e) {
      console.warn('Failed to save to localStorage:', e)
      return false
    }
  },
  
  get: function(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (e) {
      console.warn('Failed to read from localStorage:', e)
      return defaultValue
    }
  },
  
  remove: function(key) {
    try {
      localStorage.removeItem(key)
      return true
    } catch (e) {
      console.warn('Failed to remove from localStorage:', e)
      return false
    }
  }
}

// Initialize common functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Add any global initialization here
  console.log('Common utilities loaded')
})