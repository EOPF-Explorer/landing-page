/**
 * Common utilities for integration pages
 */

const STAC_ENDPOINT = "https://api.explorer.eopf.copernicus.eu/stac";

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

/**
 * Picks the newest scene covering the area centre and at least minSizeKm wide.
 * A bbox search also returns corner-clipping neighbours and swath-edge strips.
 *
 * @param {import("stac-ts").StacItem[]} features
 * @param {number[]} area - [west, south, east, north]
 * @param {number} minSizeKm
 * @returns {import("stac-ts").StacItem | undefined}
 */
function pickCovering(features, [west, south, east, north], minSizeKm) {
  const lon = (west + east) / 2;
  const lat = (south + north) / 2;

  return features.find(({ bbox }) => {
    if (!bbox) return false;

    return (
      bbox[0] <= lon &&
      bbox[2] >= lon &&
      bbox[1] <= lat &&
      bbox[3] >= lat &&
      (bbox[2] - bbox[0]) * 111 * Math.cos((lat * Math.PI) / 180) >=
        minSizeKm &&
      (bbox[3] - bbox[1]) * 111 >= minSizeKm
    );
  });
}

/**
 * Fetches the newest catalog item matching the search.
 *
 * @param {Object} [options]
 * @param {string} [options.tile] - MGRS tile without prefix, e.g. "32TQR"
 * @param {number} [options.maxCloud] - Max eo:cloud_cover in percent
 * @param {string} [options.collection]
 * @param {number[]} [options.bbox] - [west, south, east, north] in lon/lat
 * @param {string} [options.datetime] - RFC 3339 instant or interval
 * @param {object} [options.filter] - Extra CQL2-JSON expression
 * @param {number} [options.minSizeKm] - Smallest usable scene, per bbox side
 * @returns {Promise<{id: string, bbox: number[], zarrUrl: string}>}
 */
export async function fetchLatestItem(options = {}) {
  const {
    tile,
    maxCloud = 10,
    collection = "sentinel-2-l2a",
    bbox,
    datetime,
    filter,
    minSizeKm = 80,
  } = options;

  const conditions = [];
  if (tile)
    conditions.push({
      op: "=",
      args: [{ property: "grid:code" }, `MGRS-${tile}`],
    });
  conditions.push({
    op: "<=",
    args: [{ property: "eo:cloud_cover" }, maxCloud],
  });
  if (filter) conditions.push(filter);

  const response = await fetch(`${STAC_ENDPOINT}/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      collections: [collection],
      // pickCovering needs candidates to choose from
      limit: bbox ? 20 : 1,
      sortby: [{ field: "properties.datetime", direction: "desc" }],
      ...(bbox && { bbox }),
      ...(datetime && { datetime }),
      ...(conditions.length && {
        "filter-lang": "cql2-json",
        filter:
          conditions.length === 1
            ? conditions[0]
            : { op: "and", args: conditions },
      }),
    }),
  });

  if (!response.ok) {
    throw new Error(`STAC search failed with status ${response.status}`);
  }

  /** @type {import("stac-ts").StacItem[]} */
  const features = (await response.json()).features ?? [];
  const item = bbox ? pickCovering(features, bbox, minSizeKm) : features[0];
  if (!item)
    throw new Error(
      `No ${collection} item covers ${bbox ? `bbox [${bbox}]` : `tile ${tile}`}`,
    );

  const zarrUrl = item.links.find((link) => link.rel === "store")?.href;
  if (!item.bbox || !zarrUrl)
    throw new Error(`${item.id} is missing a bbox or a store link`);

  return { id: item.id, bbox: item.bbox, zarrUrl };
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
