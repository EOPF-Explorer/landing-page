/**
 * La Palma Lava Flow Tour — Cumbre Vieja 2021 Eruption
 *
 * Based on the "River of Fire" narrative, tracing the 85-day eruption
 * through Copernicus Sentinel-2 imagery from September 2021 to January 2022.
 *
 * Service IDs:
 *   Natural color mosaic:       456c1e23-47f2-4567-98cf-dcde378a05f7
 *   Lava flow visualization:    4a0bda83-e70b-4e26-af57-1dbf763074af
 *   False Color Infrared:       c51460e7-759b-4829-b15a-62134987e312d4
 */

export default [
    // ========================================
    // INTRO — Approaching the Canary Islands
    // ========================================
    {
        lon: -16.5, lat: 28.5, alt: 800000, heading: 0, pitch: -90, roll: 0,
        duration: 3, pause: 2,
        label: 'River of Fire: La Palma Visualized',
        section: 'Intro',
        sourceLabel: 'Copernicus Sentinel-2 — EOPF Explorer',
        sourceLink: 'https://explorer.eopf.copernicus.eu/story/?id=lava-flow',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '2021-09-20', timeEnd: '2021-09-26', cloudCover: 40,
        },
    },
    {
        lon: -17.87, lat: 28.61, alt: 80000, heading: 0, pitch: -70, roll: 0,
        duration: 4, pause: 3,
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
        lon: -17.9577, lat: 28.4996, alt: 9624, heading: 21, pitch: -30, roll: 0, duration: 4, pause: 3,
        duration: 5, pause: 4,
        label: 'Looking uphill toward the eruption vent',
    },

    // Switch to Lava flow SWIR — The River of Fire
    {
        // lon: -17.87, lat: 28.61, alt: 20000, heading: 0, pitch: -55, roll: 0,
        duration: 2, pause: 5,
        label: 'SWIR — The River of Fire blazes in infrared',
        sourceLabel: 'Lava Flow Visualization (SWIR)',
        layer: {
            serviceId: '4a0bda83-e70b-4e26-af57-1dbf763074af',
            timeStart: '2021-09-25', timeEnd: '2021-09-26',
        },
    },

    // Dramatic terrain view — fly low along the lava channel
    {
        lon: -17.86, lat: 28.62, alt: 4000, heading: 250, pitch: -20, roll: 0,
        duration: 5, pause: 3,
        label: 'Incandescent lava channels flowing downhill',
    },

    // ========================================
    // SEPTEMBER 30 — Lava Meets the Sea
    // ========================================
    {
        lon: -17.89, lat: 28.60, alt: 15000, heading: 270, pitch: -45, roll: 0,
        duration: 5, pause: 3,
        section: 'Lava Meets the Sea',
        label: 'September 30 — The lava reaches the Atlantic',
        sourceLabel: 'Lava Flow Visualization (SWIR)',
        layer: {
            serviceId: '4a0bda83-e70b-4e26-af57-1dbf763074af',
            timeStart: '2021-09-30', timeEnd: '2021-10-01',
        },
    },

    // Coastline viewpoint — looking at the fajana from the ocean
    {
        lon: -17.92, lat: 28.60, alt: 3000, heading: 90, pitch: -10, roll: 0,
        duration: 5, pause: 5,
        waitForTiles: true,
        label: 'The new lava delta — fajana — extends the coastline',
    },

    // ========================================
    // OCTOBER 10 — New Vent Opens
    // ========================================
    {
        lon: -17.87, lat: 28.61, alt: 18000, heading: 0, pitch: -55, roll: 0,
        duration: 4, pause: 5,
        section: 'October — Intensifying',
        label: 'October 10 — New vent opens, multiple active channels',
        layer: {
            serviceId: '4a0bda83-e70b-4e26-af57-1dbf763074af',
            timeStart: '2021-10-10', timeEnd: '2021-10-11',
        },
    },

    // Mountain ridge view — looking across the ridge
    {
        lon: -17.84, lat: 28.63, alt: 5000, heading: 230, pitch: -12, roll: 0,
        duration: 5, pause: 4,
        label: 'Fresh lava branches threaten new areas',
    },

    // ========================================
    // OCTOBER 15 — Ash plume & SWIR penetration
    // ========================================
    {
        lon: -17.87, lat: 28.62, alt: 30000, heading: 0, pitch: -60, roll: 0,
        duration: 4, pause: 4,
        label: 'October 15 — Massive ash plume blankets the island',
        sourceLabel: 'Copernicus Sentinel-2 Natural Color',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '2021-10-15', timeEnd: '2021-10-16', cloudCover: 100,
        },
    },

    // Switch to SWIR — seeing through the plume
    {
        lon: -17.87, lat: 28.62, alt: 30000, heading: 0, pitch: -60, roll: 0,
        duration: 2, pause: 5,
        label: 'SWIR sees through smoke — active flows revealed',
        sourceLabel: 'Lava Flow Visualization (SWIR)',
        layer: {
            serviceId: '4a0bda83-e70b-4e26-af57-1dbf763074af',
            timeStart: '2021-10-15', timeEnd: '2021-10-16',
        },
    },

    // ========================================
    // OCTOBER 30 — Still Burning
    // ========================================
    {
        lon: -17.87, lat: 28.62, alt: 25000, heading: 0, pitch: -55, roll: 0,
        duration: 4, pause: 4,
        section: 'Late October',
        label: 'October 30 — Week six, still burning beneath the plume',
        layer: {
            serviceId: '4a0bda83-e70b-4e26-af57-1dbf763074af',
            timeStart: '2021-10-30', timeEnd: '2021-10-31',
        },
    },

    // Low flyover from vent to coast
    {
        lon: -17.86, lat: 28.615, alt: 4500, heading: 260, pitch: -18, roll: 0,
        duration: 6, pause: 2,
        label: 'Tracing the river of fire from vent to ocean',
    },
    {
        lon: -17.90, lat: 28.60, alt: 3500, heading: 260, pitch: -15, roll: 0,
        duration: 6, pause: 4,
        label: 'Lava channel reaching the Atlantic coast',
    },

    // ========================================
    // JANUARY 3, 2022 — After the Fire
    // ========================================
    {
        lon: -17.87, lat: 28.61, alt: 20000, heading: 0, pitch: -60, roll: 0,
        duration: 5, pause: 4,
        section: 'Aftermath',
        label: 'January 3, 2022 — The eruption is over',
        sourceLabel: 'Copernicus Sentinel-2 Natural Color',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '2022-01-03', timeEnd: '2022-01-04', cloudCover: 40,
        },
    },

    // Terrain view of the scar
    {
        lon: -17.85, lat: 28.58, alt: 5000, heading: 330, pitch: -15, roll: 0,
        duration: 5, pause: 4,
        waitForTiles: true,
        label: '1,200 hectares buried under lava — the dark scar',
    },

    // SWIR — cooled down
    {
        lon: -17.87, lat: 28.61, alt: 18000, heading: 0, pitch: -55, roll: 0,
        duration: 3, pause: 4,
        label: 'SWIR — No more glow. The eruption is truly over.',
        sourceLabel: 'Lava Flow Visualization (SWIR)',
        layer: {
            serviceId: '4a0bda83-e70b-4e26-af57-1dbf763074af',
            timeStart: '2022-01-03', timeEnd: '2022-01-04',
        },
    },

    // False Color Infrared — vegetation loss
    {
        lon: -17.87, lat: 28.61, alt: 18000, heading: 0, pitch: -55, roll: 0,
        duration: 2, pause: 5,
        label: 'False Color Infrared — the extent of vegetation loss',
        sourceLabel: 'False Color Infrared (B08, B04, B03)',
        layer: {
            serviceId: 'c51460e7-759b-4829-b15a-62134987e312d4',
            timeStart: '2022-01-03', timeEnd: '2022-01-04',
        },
    },

    // Final panoramic orbit around the scar
    {
        lon: -17.90, lat: 28.59, alt: 6000, heading: 60, pitch: -15, roll: 0,
        duration: 5, pause: 0,
        section: 'Final Orbit',
        label: 'Orbiting the lava field — from coast to vent',
        sourceLabel: 'Copernicus Sentinel-2 Natural Color',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '2022-01-03', timeEnd: '2022-01-04', cloudCover: 40,
        },
    },
    {
        lon: -17.85, lat: 28.60, alt: 6000, heading: 150, pitch: -15, roll: 0,
        duration: 5, pause: 0,
        label: 'The volcanic ridge from the east',
    },
    {
        lon: -17.86, lat: 28.63, alt: 6000, heading: 210, pitch: -15, roll: 0,
        duration: 5, pause: 0,
        label: 'Looking south across the devastation',
    },
    {
        lon: -17.90, lat: 28.62, alt: 6000, heading: 320, pitch: -15, roll: 0,
        duration: 5, pause: 5,
        label: '85 days that reshaped La Palma',
    },
]
