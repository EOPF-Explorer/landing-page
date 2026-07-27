/**
 * Maps a STAC catalogue deep link to its Sentinel Explorer equivalent, so that
 * `/collections/sentinel-2-l2a/items/S2B_MSIL2A_20260727T084559_...` opens as
 * `/sentinelexplorer/?indicator=sentinel-2-l2a&item=S2B_MSIL2A_20260727T084559_...`.
 *
 * @param {string} pathname
 * @returns {string | null} Sentinel Explorer URL, or null if the path is not a STAC item link.
 */
export const resolveStacItemRedirect = (pathname) => {
  const match = /^\/collections\/([^/]+)\/items\/([^/]+)\/?$/.exec(pathname);
  if (!match) {
    return null;
  }

  const params = new URLSearchParams({
    indicator: decodeURIComponent(match[1]),
    item: decodeURIComponent(match[2]),
  });
  return `/sentinelexplorer/?${params}`;
};
