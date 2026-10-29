---
title: Developer Resources
description: "Start here to build on EOPF Sentinel Zarr: STAC, raster and openEO APIs, direct Zarr access over HTTPS and S3, and the data model specifications."
layout: page
llm:
  - heading: Client libraries
    source: ../../content/services.data.js
    items: clientLibraries
    title: title
    link:
      field: link
      prefix: /software-services/
    fields:
      - content
---

## Developer Resources

Everything you need to build on EOPF Sentinel Zarr: the public APIs behind EOPF Explorer, how to reach the Zarr stores directly, and the specifications that describe the data. Catalog, raster and data access are open without credentials; openEO processing needs a free Copernicus Data Space account.

<FeaturesGallery
  class="quick-links"
  :sectionTitle="false"
  background="transparent"
  cardBackground="primary"
  columns="3/2/1"
  :cards="quickLinks"
/>

### <i class="mdi mdi-database-search-outline section-icon icon-stac"></i> STAC API {#stac-api}

The catalog of all EOPF Explorer Sentinel Zarr products, following the [STAC API](https://stacspec.org/en/about/stac-spec/) specification. Start here to find collections and items; every other service and the data itself are linked from the STAC items.

```text
https://api.explorer.eopf.copernicus.eu/stac
```

<div class="scroll">

| Entry point | Returns |
|---|---|
| `/collections` | Available collections, e.g. `sentinel-2-l2a` |
| `/collections/{collection_id}/items` | Items of a collection |
| `/search` | Items filtered by area, time and properties |

</div>

For example, one Sentinel-2 L2A item over Vienna:

```bash
curl "https://api.explorer.eopf.copernicus.eu/stac/search?collections=sentinel-2-l2a&bbox=16.2,48.1,16.5,48.3&limit=1"
```

<nav class="row wrap">
  <a class="chip primary-border primary-text" href="https://api.explorer.eopf.copernicus.eu/stac/api.html" target="_blank" rel="noopener"><i class="mdi mdi-book-open-variant"></i><span>API reference</span></a>
  <a class="chip" href="https://api.explorer.eopf.copernicus.eu/browser" target="_blank" rel="noopener"><i class="mdi mdi-compass-outline"></i><span>STAC Browser</span></a>
  <a class="chip" href="https://stacspec.org/" target="_blank" rel="noopener"><i class="mdi mdi-file-document-outline"></i><span>STAC specification</span></a>
</nav>

<div class="large-space"></div>

### <i class="mdi mdi-layers-triple-outline section-icon icon-raster"></i> Raster API {#raster-api}

**TiTiler for EOPF Zarr** renders map tiles, previews and point values directly from the Zarr stores, with band combinations, expressions and colormaps applied on the fly.

```text
https://api.explorer.eopf.copernicus.eu/raster
```

Item routes start with `/collections/{collection_id}/items/{item_id}`:

<div class="scroll">

| Entry point | Returns |
|---|---|
| `/info` | Bands and metadata of the item |
| `/{tileMatrixSetId}/tilejson.json` | TileJSON, ready for web maps |
| `/preview.{format}` | A preview image |
| `/point/{lon},{lat}` | Values at a location |

</div>

Collection mosaics use `/collections/{collection_id}/{tileMatrixSetId}/tilejson.json`. Every STAC item also links ready-made `tilejson`, `xyz` and `viewer` URLs.

<nav class="row wrap">
  <a class="chip primary-border primary-text" href="https://api.explorer.eopf.copernicus.eu/raster/api.html" target="_blank" rel="noopener"><i class="mdi mdi-book-open-variant"></i><span>API reference</span></a>
  <a class="chip" :href="withBase('/software-services/titiler/')"><i class="mdi mdi-school-outline"></i><span>TiTiler tutorials</span></a>
</nav>

<div class="large-space"></div>

### <i class="mdi mdi-function-variant section-icon icon-openeo"></i> openEO API <span class="chip small primary-text primary-border">Preview</span> {#openeo-api}

An [openEO](https://openeo.org/) backend serving the EOPF collections, built on TiTiler-openEO. Browsing collections and processes is open; running processes needs a login with a free [Copernicus Data Space](https://dataspace.copernicus.eu/) account, which openEO clients handle through OpenID Connect.

```text
https://api.explorer.eopf.copernicus.eu/openeo
```

<div class="scroll">

| Entry point | Returns |
|---|---|
| `/collections` | Collections available for processing |
| `/processes` | Supported openEO processes |
| `/credentials/oidc` | Login provider for openEO clients |

</div>

<nav class="row wrap">
  <a class="chip primary-border primary-text" href="https://studio.explorer.eopf.copernicus.eu/" target="_blank" rel="noopener"><i class="mdi mdi-application-brackets-outline"></i><span>openEO Studio</span></a>
  <a class="chip" href="https://openeo.org/documentation/1.0/" target="_blank" rel="noopener"><i class="mdi mdi-language-python"></i><span>openEO client libraries</span></a>
</nav>

<div class="large-space"></div>

### <i class="mdi mdi-cloud-download-outline section-icon icon-data"></i> Data access {#data-access}

The Zarr stores are public: open them straight from a Zarr client in Python, R, JavaScript or GDAL, without the APIs above. Use the STAC API to find them.

- Each item's `store` link points to the root of its Zarr store; each data asset `href` points to a Zarr group inside it, over **HTTPS**.
- The same location as an **S3** URL is in the asset's `alternate.s3.href` ([Alternate Assets extension](https://github.com/stac-extensions/alternate-assets)).
- The S3-compatible endpoint, bucket and region are in the item's `storage:schemes` property ([Storage extension](https://github.com/stac-extensions/storage)).
- Each item links the Copernicus Sentinel data `license` and a citable DOI (`cite-as`). Credit the data as "Contains modified Copernicus Sentinel data [year]".

<br>

::: tip <i class="mdi mdi-key-remove"></i> No credentials needed
:::

<div class="large-space"></div>

### <i class="mdi mdi-file-tree-outline section-icon icon-model"></i> Data model and specifications {#data-model}

How EOPF Explorer structures Sentinel data as GeoZarr, and the software that converts the products.

<nav class="row wrap">
  <a class="chip primary-border primary-text" href="https://eopf-explorer.github.io/data-model/" target="_blank" rel="noopener"><i class="mdi mdi-book-open-variant"></i><span>Data model documentation</span></a>
  <a class="chip" href="https://eopf-explorer.github.io/data-model/geozarr-minispec/" target="_blank" rel="noopener"><i class="mdi mdi-file-certificate-outline"></i><span>GeoZarr mini-spec</span></a>
  <a class="chip" :href="withBase('/software-services/datamodel/')"><i class="mdi mdi-earth"></i><span>Pioneering the GeoZarr Data Model</span></a>
</nav>

<div class="large-space"></div>

### <i class="mdi mdi-code-tags section-icon icon-clients"></i> Client libraries {#clients}

Libraries with EOPF Zarr support, each with tutorials on this site:

<FeaturesGallery
  :sectionTitle="false"
  variant="poster"
  columns="4/2/1"
  background="transparent"
  :cards="clientCards"
/>

<CTASection style="margin-bottom:0px"
  title="Building something with EOPF Zarr?"
  tagline="Tell us what you are working on, ask the team, or request a missing feature on the EOPF forum."
  primaryButton="Visit the EOPF Forum"
  primaryLink="https://discourse.eopf.copernicus.eu/c/eopf-explorer/17"
  dark
/>

<script setup>
import { withBase } from "vitepress";
import { data as servicesData } from "../../content/services.data.js";
import { toFeaturedCard } from "../../.vitepress/utils/services";

/** @param {string} name mdi icon */
const icon = (name) => ({
  html: `<i class="mdi ${name}" style="font-size: 32px; height: 32px; width: 32px;"></i>`,
});

const quickLinks = [
  { id: "stac-api", title: "STAC API", icon: icon("mdi-database-search-outline"), content: "Find collections and items; the entry point to everything else.", link: { href: "/software-services/developer-resources/#stac-api" } },
  { id: "raster-api", title: "Raster API", icon: icon("mdi-layers-triple-outline"), content: "Tiles, previews and point values rendered from Zarr.", link: { href: "/software-services/developer-resources/#raster-api" } },
  { id: "openeo-api", title: "openEO API", icon: icon("mdi-function-variant"), content: "Run openEO processes on the EOPF collections.", link: { href: "/software-services/developer-resources/#openeo-api" } },
  { id: "data-access", title: "Data access", icon: icon("mdi-cloud-download-outline"), content: "Read the Zarr stores directly over HTTPS or S3.", link: { href: "/software-services/developer-resources/#data-access" } },
  { id: "data-model", title: "Data model", icon: icon("mdi-file-tree-outline"), content: "GeoZarr conventions and conversion software.", link: { href: "/software-services/developer-resources/#data-model" } },
  { id: "clients", title: "Client libraries", icon: icon("mdi-code-tags"), content: "Libraries and tutorials for building with EOPF Zarr.", link: { href: "/software-services/developer-resources/#clients" } },
];

const clientCards = servicesData.clientLibraries.map(toFeaturedCard);
</script>

<style scoped>
/* Keep each route on one line; the wrapper scrolls on narrow screens */
.scroll td {
  white-space: nowrap;
}

/* One EOPF Design System colour per resource, shared by its quick-link card and section icon */
.quick-links :deep(.card-wrapper article) {
  background: linear-gradient(
    150deg,
    var(--resource-color) 0%,
    color-mix(in srgb, var(--resource-color) 65%, black) 100%
  );
}
/* The theme sets dark card titles and grey card text; keep both white on the coloured cards */
.quick-links :deep(.card-title-text a),
.quick-links :deep(.card-body-text) {
  color: inherit !important;
}
.section-icon {
  color: var(--resource-color);
}
.quick-links :deep(.card-wrapper:nth-child(1) article),
.icon-stac {
  --resource-color: #009bdb; /* Trusty Azure 500 */
}
.quick-links :deep(.card-wrapper:nth-child(2) article),
.icon-raster {
  --resource-color: #d39014; /* Enlight Yellow 600 */
}
.quick-links :deep(.card-wrapper:nth-child(3) article),
.icon-openeo {
  --resource-color: #5c7b89; /* Deep Space 400 */
}
.quick-links :deep(.card-wrapper:nth-child(4) article),
.icon-data {
  --resource-color: #00ae9d; /* Pure Teal 500 */
}
.quick-links :deep(.card-wrapper:nth-child(5) article),
.icon-model {
  --resource-color: #003047; /* Deep Space 500 */
}
.quick-links :deep(.card-wrapper:nth-child(6) article),
.icon-clients {
  --resource-color: #006995; /* Trusty Azure 700 */
}
</style>
