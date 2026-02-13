---
url: /pr-preview/pr-60/software-services/datamodel.md
---

### Our Mission

The EOPF Explorer project is at the forefront of establishing **GeoZarr** as the foundation for cloud-native Earth Observation data. Through intensive collaboration with the Zarr community, we've developed and released foundational conventions that enable interoperable, efficient access to geospatial data across the entire EO ecosystem.

> *"This standardization work ensures that EOPF Zarr data is not locked into proprietary formats or single-application workflows, but becomes a true cloud-native standard accessible across the entire Earth Observation ecosystem."*

***

### The Journey: From Vision to Community Standards

***

### The Foundation: Zarr Conventions

At the Zarr Summit in Rome, we established a new approach: instead of a monolithic GeoZarr specification, we created modular **Zarr Conventions** that can be adopted incrementally and evolved independently.

***

### Why This Matters

Open, interoperable standards enable broader adoption and long-term sustainability of Earth Observation data. EOPF Explorer's Zarr Conventions work establishes a community-driven foundation for cloud-native Earth Observation:

| Goal | How Zarr Conventions Help |
|------|---------------------------|
|  **Common container format** | One format across all Sentinel missions reduces mission-specific reader software needs |
|  **Cloud-native access** | Efficient network access without downloading entire products |
|  **Progressive visualization** | Multiscales enable interactive exploration at any zoom level |
|  **Ecosystem interoperability** | QGIS, ArcGIS, ENVI, Python, R, Julia, JavaScript can all read the same data |
|  **Future-proof standards** | Community-driven specifications ensure long-term sustainability |

***

### Client Software Enablement

Our conventions work is enabling a growing ecosystem of tools:

##### TiTiler

Dynamic tile server with OGC Tiles API, WMS/WMTS endpoints, and band arithmetic.

* [TiTiler EOPF API](https://api.explorer.eopf.copernicus.eu/raster/)

##### GDAL (v3.12+)

The de facto standard for geospatial data access now supports EOPF Zarr, enabling access from **QGIS**, **ArcGIS**, **ENVI**, and the entire desktop GIS ecosystem.

* [GDAL Zarr Driver Documentation](https://gdal.org/en/stable/drivers/raster/zarr.html)
* Phase 2 (full conventions support) in progress

##### OpenLayers

Browser-based visualization with native GeoZarr rendering, including off-screen Canvas for 3D globe projection using [EOxMap](/software-services/eoxelements/globe).

* [OpenLayers GeoZarr Example](https://openlayers.org/en/main/examples/geozarr.html)
* Requires `ol` v10.8.0 or later. The implementation is still experimental, conforming to the evolving specification.

***

### Community Leadership

##### GeoZarr SWG Contributions

We actively contributed to the OGC GeoZarr Specifications Working Group (SWG), submitting multiple proposals that shaped the current discussion on terminology, multiscales, and dimension binding. We proposed a pragmatic strategy that uses the established conventions as the foundation for GeoZarr v1.

##### STAC Integration

We authored the first comprehensive [STAC best practices for Zarr integration](https://github.com/radiantearth/stac-best-practices/blob/main/best-practices-zarr.md) and participated in the [STAC+Zarr Sprint at ESA/ESRIN](https://cloudnativegeo.org/blog/2025/11/stac-zarr-community-sprint-2025-recap/).

***

### Learn More
