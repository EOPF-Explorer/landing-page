/**
 * Default Globe Tour Script — Mont Blanc + Venice Lagoon NDCI
 *
 * This file serves as both the fallback tour when no remote config is provided
 * and as a documented example of the tour configuration schema.
 *
 * Each step supports: lon, lat, alt, heading, pitch, roll, duration, pause,
 * label, section, sourceLabel, sourceLink, waitForTiles, tileTimeout, layer.
 *
 * Time tokens in `layer.timeStart` / `layer.timeEnd`:
 *   "$today"          → today's date
 *   "$yesterday"      → yesterday's date
 *   "$daysAgo(N)"     → N days before today
 *   "$daysFromNow(N)" → N days after today
 *   "2025-05-12"      → literal ISO date
 */

export default [
    // ============================
    // INTRO — Europe overview
    // ============================
    {
        lon: 4.5, lat: 43.5, alt: 5000000, heading: 0, pitch: -90, roll: 0,
        duration: 3, pause: 0,
        label: 'Welcome to Globe Tour',
        section: 'Intro',
        sourceLabel: 'Copernicus data - EOPF Sentinels Explorer',
        sourceLink: 'https://explorer.eopf.copernicus.eu/',
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '$today', timeEnd: '$today', cloudCover: 40,
        },
    },

    // ============================
    // MONT BLANC orbit
    // ============================
    {
        lon: 6.8652, lat: 45.7, alt: 40000, heading: 0, pitch: -60, roll: 0,
        duration: 1, pause: 0,
        label: 'Approaching Mont Blanc',
        section: 'Mont Blanc',
    },
    {
        lon: 6.8652, lat: 45.7, alt: 40000, heading: 0, pitch: -60, roll: 0,
        duration: 4, pause: 3,
        label: 'Approaching Mont Blanc - Sentinel-2 cloud free mosaic - Last 28 days',
        sourceLabel: 'Copernicus data - EOPF Sentinels Explorer',
        sourceLink: 'https://explorer.eopf.copernicus.eu/',
        waitForTiles: true,
        layer: {
            serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
            timeStart: '$daysAgo(28)', timeEnd: '$today', cloudCover: 40,
        },
    },
    // Summit coords: 6.8652°E, 45.8326°N — orbiting at ~10 km distance, ~8000 m altitude
    { lon: 6.8652, lat: 45.745,  alt: 8000, heading:   0, pitch: -17, roll: 0, duration: 5, pause: 0, label: 'Mont Blanc - South - Sentinel-2 cloud free mosaic - Last 28 days' },
    { lon: 6.78,   lat: 45.77,   alt: 8000, heading:  45, pitch: -17, roll: 0, duration: 5, pause: 0, label: 'Mont Blanc - Southwest - Sentinel-2 cloud free mosaic - Last 28 days' },
    { lon: 6.75,   lat: 45.8326, alt: 8000, heading:  90, pitch: -17, roll: 0, duration: 5, pause: 0, label: 'Mont Blanc - West - Sentinel-2 cloud free mosaic - Last 28 days' },
    { lon: 6.78,   lat: 45.895,  alt: 8000, heading: 135, pitch: -17, roll: 0, duration: 5, pause: 0, label: 'Mont Blanc - Northwest - Sentinel-2 cloud free mosaic - Last 28 days' },
    { lon: 6.8652, lat: 45.92,   alt: 8000, heading: 180, pitch: -17, roll: 0, duration: 5, pause: 0, label: 'Mont Blanc - North - Sentinel-2 cloud free mosaic - Last 28 days' },
    { lon: 6.95,   lat: 45.895,  alt: 8000, heading: 225, pitch: -17, roll: 0, duration: 5, pause: 0, label: 'Mont Blanc - Northeast - Sentinel-2 cloud free mosaic - Last 28 days' },
    { lon: 6.98,   lat: 45.8326, alt: 8000, heading: 270, pitch: -17, roll: 0, duration: 5, pause: 0, label: 'Mont Blanc - East - Sentinel-2 cloud free mosaic - Last 28 days' },
    { lon: 6.95,   lat: 45.77,   alt: 8000, heading: 315, pitch: -17, roll: 0, duration: 5, pause: 0, label: 'Mont Blanc - Southeast - Sentinel-2 cloud free mosaic - Last 28 days' },
    { lon: 6.8652, lat: 45.745,  alt: 8000, heading:   0, pitch: -17, roll: 0, duration: 5, pause: 3, label: 'Mont Blanc - Completing orbit - Sentinel-2 cloud free mosaic - Last 28 days' },

    // ============================
    // VENICE LAGOON — Cyanobacteria & NDCI
    // ============================
    {
        lon: 12.3, lat: 45.27, alt: 200000, heading: 0, pitch: -90, roll: 0,
        duration: 6, pause: 3,
        label: 'Flying to Venice Lagoon - Monitoring Cyanobacteria',
        section: 'Venice Lagoon',
        sourceLabel: 'Copernicus Sentinel-2 - EOPF Explorer',
        sourceLink: 'https://explorer.eopf.copernicus.eu/story/?id=ndci',
        layer: {
            serviceId: '25107b35-eb1b-4171-8a54-b610a02b9c5c',
            timeStart: '2025-05-12', timeEnd: '2025-05-13',
        },
    },
    {
        lon: 12.3, lat: 45.27, alt: 50000, heading: 0, pitch: -70, roll: 0,
        duration: 4, pause: 5,
        waitForTiles: true,
        label: 'Venice Lagoon - Largest lagoon in the Mediterranean',
    },
    {
        lon: 12.5, lat: 45.37, alt: 20000, heading: -17, pitch: -60, roll: 0,
        duration: 4, pause: 5,
        label: 'Visible algae blooms on the water surface',
        layer: {
            serviceId: '453c1856-968a-4862-94cc-fe03da7d427a',
            timeStart: '2025-05-12', timeEnd: '2025-05-13',
        },
        sourceLabel: 'Aquatic Plants and Algae Detector (APA)',
    },
    {
        lon: 12.5, lat: 45.37, alt: 20000, heading: -17, pitch: -60, roll: 0,
        duration: 3, pause: 5,
        label: 'NDCI - Normalised Difference Chlorophyll Index',
        layer: {
            serviceId: '9551a434-c1a9-4600-bddb-d289f55c670e',
            timeStart: '2025-05-12', timeEnd: '2025-05-13',
        },
        sourceLabel: 'NDCI Cyanobacteria Chlorophyll-a',
    },
    {
        lon: 12.5081, lat: 45.5428, alt: 4812, heading: 262, pitch: -22, roll: 0,
        duration: 4, pause: 4,
        label: 'Northern Lagoon - Industrial influence zone (Marghera)',
    },
    {
        lon: 12.2459, lat: 45.4072, alt: 3622, heading: 75, pitch: -18, roll: 0,
        duration: 4, pause: 3,
        label: 'Central Lagoon - Venice Historic Center',
    },
    {
        lon: 12.2975, lat: 45.1421, alt: 13612, heading: 360, pitch: -60, roll: 0,
        duration: 4, pause: 3,
        label: 'Southern Lagoon - Chioggia fishing area',
    },
    {
        lon: 12.3, lat: 45.27, alt: 50000, heading: 0, pitch: -70, roll: 0,
        duration: 4, pause: 3,
        label: 'Spring 2025 - Cyanobacteria awakening',
    },
    {
        lon: 12.3, lat: 45.27, alt: 50000, heading: 0, pitch: -70, roll: 0,
        duration: 1, pause: 5,
        waitForTiles: true,
        label: 'Summer 2025 - Peak algal activity',
        layer: {
            serviceId: '9551a434-c1a9-4600-bddb-d289f55c670e',
            timeStart: '2025-07-26', timeEnd: '2025-07-27',
        },
    },
    {
        lon: 12.3, lat: 45.27, alt: 50000, heading: 0, pitch: -70, roll: 0,
        duration: 1, pause: 5,
        waitForTiles: true,
        label: 'Autumn 2025 - Natural decline',
        layer: {
            serviceId: '9551a434-c1a9-4600-bddb-d289f55c670e',
            timeStart: '2025-10-24', timeEnd: '2025-10-25',
        },
    },
]
