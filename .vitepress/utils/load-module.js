/**
 * Imports a web component module on demand, client side only. A failed import is
 * logged instead of thrown, so one broken bundle cannot stop the page from rendering.
 * Call it at the top of `<script setup>` so the download starts before mount.
 *
 * @param {() => Promise<unknown>} importer e.g. `() => import("@eox/map")`; must stay a
 *   function with a literal path so Vite can bundle it
 * @param {string} [tagName] custom element the module defines; the import is skipped
 *   when it is already defined (e.g. by the eodash bundle)
 * @returns {Promise<boolean>} whether the module is available; always `false` during SSR
 */
export async function loadModule(importer, tagName) {
  if (import.meta.env.SSR) {
    return false;
  }
  if (tagName && customElements.get(tagName)) {
    return true;
  }
  try {
    await importer();
    return true;
  } catch (error) {
    console.error(`Failed to load module${tagName ? ` for <${tagName}>` : ""}:`, error);
    return false;
  }
}