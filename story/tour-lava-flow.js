/**
 * La Palma Lava Flow Tour — Cumbre Vieja 2021 Eruption
 *
 * Based on the "River of Fire" narrative, tracing the 85-day eruption
 * through Copernicus Sentinel-2 imagery from September 2021 to January 2022.
 *
 * Service IDs:
 *   Natural color mosaic:       456c1e23-47f2-4567-98cf-dcde378a05f7
 *   Lava flow visualization:    43f60eb8-c363-40d7-8ba7-01409c270247
 *   False Color Infrared:       c51460e7-759b-4829-b15a-62134987e312d4
 */

export default [
    // ========================================
    // INTRO — Approaching the Canary Islands
    // ========================================
    {
        lon: -17.5, lat: 28.5, alt: 120000, heading: 0, pitch: -90, roll: 0,
        duration: 3, pause: 2,
        label: 'River of Fire: La Palma Visualized',
        section: 'Intro',
        sourceLabel: 'Copernicus Sentinel-2 — EOPF Explorer',
        sourceLink: 'https://explorer.eopf.copernicus.eu/story/?id=lava-flow',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '2021-09-20', timeEnd: '2021-10-30', cloudCover: 40,
        },
    },
    {
        lon: -17.77, lat: 28.5, alt: 80000, heading: -30, pitch: -70, roll: 0,
        duration: 2, pause: 0,
        waitForTiles: true,
        label: 'La Palma — Cumbre Vieja volcanic ridge',
    },

    // ========================================
    // SEPTEMBER 25 — Six Days In
    // ========================================
    {
        lon: -17.8731, lat: 28.3442, alt: 56229, heading: 0, pitch: -60, roll: 360, duration: 2, pause: 4,
        section: 'September 25',
        label: 'September 25 — Six days in — Natural Color',
        sourceLabel: 'Copernicus Sentinel-2 Natural Color',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '2021-09-25', timeEnd: '2021-09-26', cloudCover: 80,
        },
    },

    // Terrain viewpoint from the south — looking uphill at the vent
    {
        lon: -17.9577, lat: 28.4996, alt: 9624, heading: 21, pitch: -30, roll: 0, duration: 2, pause: 1,
        label: 'Looking uphill toward the eruption vent',
    },

    // Switch to Lava flow SWIR — The River of Fire
    {
        lon: -17.9577, lat: 28.4996, alt: 9624, heading: 21, pitch: -30, roll: 0, duration: 0, pause: 3,
        label: 'SWIR — The River of Fire blazes in infrared',
        sourceLabel: 'Lava Flow Visualization (SWIR)',
        layer: {
            serviceId: '43f60eb8-c363-40d7-8ba7-01409c270247',
            timeStart: '2021-09-25', timeEnd: '2021-09-26',
        },
    },

    // Dramatic terrain view — fly low along the lava channel
    {
        lon: -17.8257, lat: 28.6072, alt: 3886, heading: 272, pitch: -21, roll: 0, duration: 4, pause: 3,
        label: 'Incandescent lava channels flowing downhill',
    },

    // ========================================
    // SEPTEMBER 30 — Lava Meets the Sea
    // ========================================
    {
        lon: -17.8257, lat: 28.6072, alt: 3886, heading: 272, pitch: -21, roll: 0, duration: 4, pause: 3,
        section: 'Lava Meets the Sea',
        label: 'September 30 — The lava reaches the Atlantic',
        sourceLabel: 'Lava Flow Visualization (SWIR)',
        layer: {
            serviceId: '43f60eb8-c363-40d7-8ba7-01409c270247',
            timeStart: '2021-09-30', timeEnd: '2021-10-01',
        },
    },
    { lon: -17.8433, lat: 28.6132, alt: 2566, heading: 272, pitch: -21, roll: 360, duration: 2, pause: 1 },
    { lon: -17.8960, lat: 28.6116, alt: 1690, heading: 272, pitch: -21, roll: 360, duration: 4, pause: 1 },
    { lon: -17.7502, lat: 28.6438, alt: 17367, heading: 270, pitch: -45, roll: 360, duration: 4, pause: 3,
        label: 'September 30 — The lava reaches the Atlantic',
        sourceLabel: 'Lava Flow Visualization (SWIR)',
        layer: {
            serviceId: '43f60eb8-c363-40d7-8ba7-01409c270247',
            timeStart: '2021-09-30', timeEnd: '2021-10-01',
        },
    },

    // Coastline viewpoint — looking at the fajana from the ocean
    { lon: -18.0140, lat: 28.6232, alt: 3007, heading: 90, pitch: -10, roll: 0, duration: 2, pause: 3,
        waitForTiles: true,
        label: 'The new lava delta — fajana — extends the coastline',
    },

    // ========================================
    // OCTOBER 10 — New Vent Opens
    // ========================================
    { lon: -17.8747, lat: 28.5337, alt: 17976, heading: 0, pitch: -55, roll: 360, duration: 2, pause: 3,
        section: 'October — Intensifying',
        label: 'October 10 — New vent opens, multiple active channels',
        layer: {
            serviceId: '43f60eb8-c363-40d7-8ba7-01409c270247',
            timeStart: '2021-10-10', timeEnd: '2021-10-16',
        },
    },

    // Mountain ridge view — looking across the ridge
    { lon: -17.8377, lat: 28.6711, alt: 3643, heading: 226, pitch: -11, roll: 0, duration: 1, pause: 3,
        label: 'Fresh lava branches threaten new areas',
    },

    // ========================================
    // OCTOBER 15 — Ash plume & SWIR penetration
    // ========================================
    { lon: -17.8670, lat: 28.6302, alt: 22883, heading: 357, pitch: -86, roll: 360, duration: 2, pause: 3,
        label: 'October 15 — Massive ash plume blankets the island',
        sourceLabel: 'Copernicus Sentinel-2 Natural Color',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '2021-10-15', timeEnd: '2021-10-16', cloudCover: 100,
        },
    },

    // Switch to SWIR — seeing through the plume
    { lon: -17.8670, lat: 28.6302, alt: 22883, heading: 357, pitch: -86, roll: 360, duration: 2, pause: 3,
        label: 'SWIR sees through smoke — active flows revealed',
        sourceLabel: 'Lava Flow Visualization (SWIR)',
        layer: {
            serviceId: '43f60eb8-c363-40d7-8ba7-01409c270247',
            timeStart: '2021-10-15', timeEnd: '2021-10-16',
        },
    },

    // ========================================
    // OCTOBER 30 — Still Burning
    // ========================================
    { lon: -17.8670, lat: 28.6302, alt: 22883, heading: 357, pitch: -86, roll: 360, duration: 2, pause: 3,
        section: 'Late October',
        label: 'October 30 — Week six, still burning beneath the plume',
        layer: {
            serviceId: '43f60eb8-c363-40d7-8ba7-01409c270247',
            timeStart: '2021-10-30', timeEnd: '2021-10-31',
        },
    },

    // ========================================
    // JANUARY 3, 2022 — After the Fire
    // ========================================
    { lon: -17.8458, lat: 28.8438, alt: 7233, heading: 189, pitch: -18, roll: 0, duration: 4, pause: 3,
        section: 'Aftermath',
        label: 'January 3, 2022 — The eruption is over',
        sourceLabel: 'Copernicus Sentinel-2 Natural Color',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '2022-01-03', timeEnd: '2022-01-04', cloudCover: 40,
        },
    },
    { lon: -17.8718, lat: 28.7574, alt: 3544, heading: 189, pitch: -18, roll: 0, duration: 2, pause: 0 },

    // Terrain view of the scar
    { lon: -17.9930, lat: 28.6366, alt: 2573, heading: 95, pitch: -6, roll: 0, duration: 4, pause: 4,
        label: '1,200 hectares buried under lava — the dark scar',
    },

    // SWIR — cooled down
    { lon: -17.9930, lat: 28.6366, alt: 2573, heading: 95, pitch: -6, roll: 0, duration: 1, pause: 4,
        label: 'SWIR — No more glow. The eruption is truly over.',
        sourceLabel: 'Lava Flow Visualization (SWIR)',
        layer: {
            serviceId: '43f60eb8-c363-40d7-8ba7-01409c270247',
            timeStart: '2022-01-03', timeEnd: '2022-01-04',
        },
    },

    // False Color Infrared — vegetation loss
    { lon: -17.9930, lat: 28.6366, alt: 2573, heading: 95, pitch: -6, roll: 0, duration: 1, pause: 4,
        label: 'False Color Infrared — the extent of vegetation loss',
        sourceLabel: 'False Color Infrared (B08, B04, B03)',
        layer: {
            serviceId: 'c51460e7-759b-4829-b15a-62134987e312d4',
            timeStart: '2022-01-03', timeEnd: '2022-01-04',
        },
    },

    // Final panoramic 
    { lon: -17.8670, lat: 28.6302, alt: 22883, heading: 357, pitch: -86, roll: 360, duration: 2, pause: 3,
        section: 'Final view',
        label: 'Overview of the volcanic ridge and lava flows — the lasting impact',
        sourceLabel: 'Copernicus Sentinel-2 Natural Color',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '2022-01-03', timeEnd: '2022-01-04', cloudCover: 40,
        },
    },
]
