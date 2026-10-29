---
url: /pr-preview/pr-129/software-services/developer-resources.md
---

## Developer Resources

Everything you need to build on EOPF Sentinel Zarr: the public APIs behind EOPF Explorer, how to reach the Zarr stores directly, and the specifications that describe the data. Catalog, raster and data access are open without credentials; openEO processing needs a free Copernicus Data Space account.

### &#x20;STAC API {#stac-api}

The catalog of all EOPF Explorer Sentinel Zarr products, following the [STAC API](https://stacspec.org/en/about/stac-spec/) specification. Start here to find collections and items; every other service and the data itself are linked from the STAC items.

```text
https://api.explorer.eopf.copernicus.eu/stac
```

| Entry point | Returns |
|---|---|
| `/collections` | Available collections, e.g. `sentinel-2-l2a` |
| `/collections/{collection_id}/items` | Items of a collection |
| `/search` | Items filtered by area, time and properties |

For example, one Sentinel-2 L2A item over Vienna:

```bash
curl "https://api.explorer.eopf.copernicus.eu/stac/search?collections=sentinel-2-l2a&bbox=16.2,48.1,16.5,48.3&limit=1"
```

### &#x20;Raster API {#raster-api}

**TiTiler for EOPF Zarr** renders map tiles, previews and point values directly from the Zarr stores, with band combinations, expressions and colormaps applied on the fly.

```text
https://api.explorer.eopf.copernicus.eu/raster
```

Item routes start with `/collections/{collection_id}/items/{item_id}`:

| Entry point | Returns |
|---|---|
| `/info` | Bands and metadata of the item |
| `/{tileMatrixSetId}/tilejson.json` | TileJSON, ready for web maps |
| `/preview.{format}` | A preview image |
| `/point/{lon},{lat}` | Values at a location |

Collection mosaics use `/collections/{collection_id}/{tileMatrixSetId}/tilejson.json`. Every STAC item also links ready-made `tilejson`, `xyz` and `viewer` URLs.

### &#x20;openEO API Preview {#openeo-api}

An [openEO](https://openeo.org/) backend serving the EOPF collections, built on TiTiler-openEO. Browsing collections and processes is open; running processes needs a login with a free [Copernicus Data Space](https://dataspace.copernicus.eu/) account, which openEO clients handle through OpenID Connect.

```text
https://api.explorer.eopf.copernicus.eu/openeo
```

| Entry point | Returns |
|---|---|
| `/collections` | Collections available for processing |
| `/processes` | Supported openEO processes |
| `/credentials/oidc` | Login provider for openEO clients |

### &#x20;Data access {#data-access}

The Zarr stores are public: open them straight from a Zarr client in Python, R, JavaScript or GDAL, without the APIs above. Use the STAC API to find them.

* Each item's `store` link points to the root of its Zarr store; each data asset `href` points to a Zarr group inside it, over **HTTPS**.
* The same location as an **S3** URL is in the asset's `alternate.s3.href` ([Alternate Assets extension](https://github.com/stac-extensions/alternate-assets)).
* The S3-compatible endpoint, bucket and region are in the item's `storage:schemes` property ([Storage extension](https://github.com/stac-extensions/storage)).
* Each item links the Copernicus Sentinel data `license` and a citable DOI (`cite-as`). Credit the data as "Contains modified Copernicus Sentinel data \[year]".

::: tip  No credentials needed
:::

### &#x20;Data model and specifications {#data-model}

How EOPF Explorer structures Sentinel data as GeoZarr, and the software that converts the products.

### &#x20;Client libraries {#clients}

Libraries with EOPF Zarr support, each with tutorials on this site:
