import { fetchLatestItem } from "./index.js";

/**
 * @typedef {Object} AreaItem
 * @property {string} id - Catalog item id, used to build raster API URLs
 * @property {number[]} bbox - Scene footprint in lon/lat
 * @property {string} zarrUrl - Zarr store URL, used by GeoZarr layers
 */

/**
 * Replaced at build time by VitePress, which rewrites this module to the
 * result of load(). The value here only exists so importers can be typed.
 *
 * @type {Record<string, AreaItem>}
 */
export const data = {};

const COLLECTION = "sentinel-2-l2a";

/**
 * Areas the examples centre on, as [west, south, east, north] in lon/lat.
 * Resolved at build time so examples never ship an expired item id.
 */
const AREAS = [
  { name: "venice", bbox: [12.2, 45.3, 12.5, 45.6] },
  { name: "naples", bbox: [14.0, 41.0, 14.2, 41.2] },
  { name: "iceland", bbox: [-19.3, 63.3, -19.0, 63.7] },
  { name: "brussels", bbox: [4.25, 50.75, 4.45, 50.95] },
  { name: "milanoCortina", bbox: [12.02, 46.44, 12.22, 46.64] },
  { name: "lyon", bbox: [4.73, 45.66, 4.93, 45.86] },
  { name: "lisbon", bbox: [-9.24, 38.63, -9.04, 38.83] },
];

export default {
  /** @returns {Promise<Record<string, AreaItem>>} */
  async load() {
    const items = await Promise.all(
      AREAS.map((area) =>
        fetchLatestItem({ collection: COLLECTION, bbox: area.bbox }),
      ),
    );

    /** @type {Record<string, any>} */
    const byArea = {};
    AREAS.forEach((area, index) => {
      byArea[area.name] = items[index];
    });

    return byArea;
  },
};
