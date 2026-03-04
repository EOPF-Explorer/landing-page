# Globe Tour

An embeddable 3D CesiumJS globe tour page. It plays a scripted camera fly-through over satellite imagery tiles, with playback controls, debug mode, and configurable tour steps.

## Quick start

Run the dev server and open:

```
http://localhost:5173/story/globe-tour
```

This loads the built-in default tour (Mont Blanc orbit + Venice Lagoon NDCI).

## Embedding in an iframe

The page hides all VitePress navigation chrome automatically, so it can be embedded as a fullscreen iframe:

```html
<iframe
  src="https://your-site.example/story/globe-tour"
  width="100%"
  height="600"
  frameborder="0"
  allow="fullscreen"
></iframe>
```

## Custom tour via `?config=` URL parameter

Pass a URL to a remote JSON config file:

```
/story/globe-tour?config=https://example.com/my-tour.json
```

The JSON must contain at minimum a `tourScript` array. All other fields are optional overrides:

```json
{
  "openeoBaseUrl": "https://api.explorer.eopf.copernicus.eu/openeo/services/xyz",
  "cesiumIonToken": "your-token-here",
  "defaultLayerParams": {
    "serviceId": "456c1e23-47f2-4567-98cf-dcde378a05f7",
    "timeStart": "$yesterday",
    "timeEnd": "$today",
    "cloudCover": null,
    "additionalParams": ""
  },
  "tourScript": [
    { "lon": 6.86, "lat": 45.83, "alt": 40000, "heading": 0, "pitch": -60, "roll": 0, "duration": 4, "pause": 3, "label": "Mont Blanc" }
  ]
}
```

> **CORS**: The remote JSON URL must be accessible from the browser (same-origin or CORS-enabled).

## Tour step schema

Each entry in the `tourScript` array is an object with these fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `lon` | number | **yes** | Longitude in degrees |
| `lat` | number | **yes** | Latitude in degrees |
| `alt` | number | **yes** | Altitude in meters |
| `heading` | number | no | Camera heading in degrees (default `0`) |
| `pitch` | number | no | Camera pitch in degrees (default `-90`, looking down) |
| `roll` | number | no | Camera roll in degrees (default `0`) |
| `duration` | number | no | Fly-to animation duration in seconds (default `3`) |
| `pause` | number | no | Time to stay at scene after arriving, in seconds (default `0`) |
| `label` | string | no | Text shown in the bottom overlay |
| `section` | string | no | If set, creates an entry in the "Jump to..." dropdown |
| `sourceLabel` | string | no | Attribution text (sticky — persists until overridden) |
| `sourceLink` | string | no | Attribution URL (sticky — persists until overridden) |
| `waitForTiles` | boolean | no | Wait for imagery tiles to load before continuing |
| `tileTimeout` | number | no | Max wait time for tiles in ms (default `30000`) |
| `layer` | object | no | Change the imagery overlay (see below) |

### Layer object

| Field | Type | Description |
|---|---|---|
| `serviceId` | string | OpenEO XYZ service UUID |
| `timeStart` | string | Start date — ISO date or time token |
| `timeEnd` | string | End date — ISO date or time token |
| `cloudCover` | number | Max cloud cover percentage |
| `additionalParams` | string | Extra query parameters |

### Time tokens

Date fields in `layer.timeStart` / `layer.timeEnd` support dynamic tokens that resolve at runtime:

| Token | Resolves to |
|---|---|
| `$today` | Today's date |
| `$yesterday` | Yesterday's date |
| `$daysAgo(N)` | N days before today |
| `$daysFromNow(N)` | N days after today |
| `2025-05-12` | Literal ISO date (no processing) |

## Cesium Ion token (terrain)

3D terrain requires a [Cesium Ion](https://ion.cesium.com/) access token. The token is resolved in this order:

1. `cesiumIonToken` field in the remote config JSON
2. `VITE_CESIUM_ION_TOKEN` environment variable at build time
3. If neither is set, the globe falls back to a flat ellipsoid (imagery still works)

### Local development

Create a `.env.local` file in the project root:

```
VITE_CESIUM_ION_TOKEN=your_cesium_ion_token
```

This file is git-ignored.

### CI/CD deployment

Add `VITE_CESIUM_ION_TOKEN` as a secret in your CI environment and pass it during build:

```yaml
- name: Build
  env:
    VITE_CESIUM_ION_TOKEN: ${{ secrets.VITE_CESIUM_ION_TOKEN }}
  run: npm run build
```

## Playback controls

| Control | Action |
|---|---|
| ⏮ | Previous step (pauses tour) |
| ▶ / ⏸ | Play / Pause |
| ⏭ | Next step (pauses tour) |
| Jump to... | Dropdown of steps with `section` field |
| 🛠 | Debug mode — enables camera controls, shows position (click to copy) |

## Files

| File | Purpose |
|---|---|
| `story/globe-tour.md` | VitePress page — entry point, config loading, chrome hiding |
| `story/default-tour.js` | Default tour script (Mont Blanc + Venice Lagoon) |
| `.vitepress/components/GlobeTour.vue` | Reusable Cesium globe tour Vue component |
