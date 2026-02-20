/**
 * Common utilities for integration pages
 */

/**
 * @typedef {import('vue').Ref<string>} VueRef
 */

/**
 * Creates a function to copy a URL to the clipboard with visual feedback.
 * Supports both modern Clipboard API and legacy fallback.
 *
 * @param {() => string} buildTileUrlFn - Function that returns the URL to copy
 * @returns {(copyButtonText: VueRef, copyButtonClass: VueRef, copyButtonIcon: VueRef) => void} Function that handles the copy operation
 */
export function createCopyUrlFunction(buildTileUrlFn) {
  return function (copyButtonText, copyButtonClass, copyButtonIcon) {
    const url = buildTileUrlFn();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          copyButtonText.value = "Copied!";
          copyButtonClass.value = "copy-button copied";
          if (copyButtonIcon) copyButtonIcon.value = "check";
          setTimeout(() => {
            copyButtonText.value = "Copy URL";
            copyButtonClass.value = "copy-button";
            if (copyButtonIcon) copyButtonIcon.value = "content-copy";
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
          copyButtonText.value = "Failed";
          if (copyButtonIcon) copyButtonIcon.value = "alert-circle";
          setTimeout(() => {
            copyButtonText.value = "Copy URL";
            if (copyButtonIcon) copyButtonIcon.value = "content-copy";
          }, 2000);
        });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        copyButtonText.value = "Copied!";
        copyButtonClass.value = "copy-button copied";
        setTimeout(() => {
          copyButtonText.value = "Copy URL";
          copyButtonClass.value = "copy-button";
          if (copyButtonIcon) copyButtonIcon.value = "content-copy";
        }, 2000);
      } catch (err) {
        console.error("Fallback copy failed: ", err);
        copyButtonText.value = "Failed";
        if (copyButtonIcon) copyButtonIcon.value = "alert-circle";
        setTimeout(() => {
          copyButtonText.value = "Copy URL";
          if (copyButtonIcon) copyButtonIcon.value = "content-copy";
        }, 2000);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };
}

export const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return gl !== null && gl !== undefined;
  } catch {
    return false;
  }
};
