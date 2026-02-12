---
title: Technical Deep Dive - GeoZarr Standards
layout: page
---


## Technical Deep Dive - GeoZarr Standards

This page provides comprehensive links to all our contributions, proposals, and technical resources for the GeoZarr standardization effort.

---

<div class="large-space"></div>

### Zarr Conventions (Released)

The three foundational conventions released at the Zarr Summit Rome, October 2025:

| Convention | Description | Repository |
|------------|-------------|------------|
| **Multiscales** | Encoding multiscale pyramid information for data stored in Zarr groups | [zarr-conventions/multiscales](https://github.com/zarr-conventions/multiscales) |
| **Projection (geo-proj)** | Encoding datum and coordinate reference system (CRS) information for geospatial data | [zarr-conventions/geo-proj](https://github.com/zarr-conventions/geo-proj) |
| **Spatial** | Describing the relationship between array indices and spatial coordinates | [zarr-conventions/spatial](https://github.com/zarr-conventions/spatial) |

**Zarr Conventions Organization:** [github.com/zarr-conventions](https://github.com/zarr-conventions/)

---

<div class="large-space"></div>

### GeoZarr OGC SWG Contributions

Pull requests submitted to the GeoZarr OGC Specifications Working Group:

| Contribution | Status | Link |
|--------------|--------|------|
| Clarify terminology across specification | Open | [PR #89](https://github.com/zarr-developers/geozarr-spec/pull/89) |
| GeoZarr Multiscales Clarifications | Open | [PR #86](https://github.com/zarr-developers/geozarr-spec/pull/86) |
| Make dimension binding for data variables match coordinate variables | Open | [PR #85](https://github.com/zarr-developers/geozarr-spec/pull/85) |
| RFC: Reformat GeoZarr as registration of Zarr translations | Open | [PR #67](https://github.com/zarr-developers/geozarr-spec/pull/67) |

**GeoZarr Specification Repository:** [github.com/zarr-developers/geozarr-spec](https://github.com/zarr-developers/geozarr-spec)

---

<div class="large-space"></div>

### Zarr Extensions Proposals

Proposals for Zarr v3 extensions:

| Proposal | Description | Link |
|----------|-------------|------|
| Registered attributes in Zarr v3 | Framework for attribute registration | [PR #23](https://github.com/zarr-developers/zarr-extensions/pull/23) |
| Projection Attribute Extension for Zarr v3 | CRS encoding extension | [PR #21](https://github.com/zarr-developers/zarr-extensions/pull/21) |

---

<div class="large-space"></div>

### Core Libraries Development

**eopf-geozarr Library (v0.6.1)**

Our Python library for working with GeoZarr data:

- **Pydantic GeoZarr model** for validation
- **Converter modules** for Sentinel-1, Sentinel-2, Sentinel-3
- **CLI** for dataset inspection, validation, and conversion
- **Docker image** for containerized workflows

| Resource | Link |
|----------|------|
| Documentation | [eopf-explorer.github.io/data-model](https://eopf-explorer.github.io/data-model/) |
| Repository | [github.com/EOPF-Explorer/data-model](https://github.com/EOPF-Explorer/data-model) |

**zarr-python Enhancements**

Contributions to the core zarr-python library:

| Enhancement | Type | Link |
|-------------|------|------|
| Option to preserve child metadata during consolidation at parent level | Issue | [#3289](https://github.com/zarr-developers/zarr-python/issues/3289) |
| Fix invalid blosc defaults | PR | [#3530](https://github.com/zarr-developers/zarr-python/pull/3530) |
| Don't serialize consolidated metadata if it's None | PR | [#3535](https://github.com/zarr-developers/zarr-python/pull/3535) |
| Refactored warnings | PR | [#3098](https://github.com/zarr-developers/zarr-python/pull/3098) |

**xarray Ecosystem**

| Contribution | Repository | Link |
|--------------|------------|------|
| Fix Zarr Encoding Documentation | xarray | [PR #10720](https://github.com/pydata/xarray/pull/10720) |
| Implement Zarr spatial and proj conventions support | rioxarray | [PR #883](https://github.com/corteva/rioxarray/pull/883) |

---

<div class="large-space"></div>

## Client Software

**GDAL GeoZarr Driver**

| Phase | Status | Description |
|-------|--------|-------------|
| Phase 1 | ✅ Complete (v3.12) | EOPF Sample and V0 support |
| Phase 2 | 🔄 In Progress | Full Zarr conventions support |

- **Documentation:** [gdal.org/drivers/raster/zarr.html](https://gdal.org/en/stable/drivers/raster/zarr.html)
- **Releases:** [github.com/OSGeo/gdal/releases](https://github.com/OSGeo/gdal/releases)

**Impact:** Enables access from QGIS, ArcGIS, ENVI, R, Python ecosystem.

**OpenLayers GeoZarr Support**

| Resource | Link |
|----------|------|
| Main PR | [PR #17194](https://github.com/openlayers/openlayers/pull/17194) |
| Additional PR | [PR #17255](https://github.com/openlayers/openlayers/pull/17255) |
| Live Example | [GeoZarr Example](https://openlayers.org/en/main/examples/geozarr.html) |
| Stretch Example | [GeoZarr Stretch Example](https://deploy-preview-17194--ol-site.netlify.app/en/latest/examples/geozarr-stretch.html) |

**Features:**
- Native GeoZarr rendering in the browser
- Off-screen Canvas for 3D globe projection ([EOxMap](/software-services/eoxelements/globe) integration)
- EOxMap Globe Hybrid rendering strategy: native + OpenLayers fallback
- Status: Experimental in v10.8.0

**TiTiler GeoZarr Adapter**

| Endpoint | URL |
|----------|-----|
| Raster API | [api.explorer.eopf.copernicus.eu/raster](https://api.explorer.eopf.copernicus.eu/raster/) |
| OpenEO API | [api.explorer.eopf.copernicus.eu/openeo](https://api.explorer.eopf.copernicus.eu/openeo/) |
| Repository | [github.com/EOPF-Explorer/titiler-eopf](https://github.com/EOPF-Explorer/titiler-eopf) |

---

<div class="large-space"></div>

### STAC Integration

**STAC+Zarr Best Practices**

The first comprehensive guide for integrating Zarr with STAC:

- **Best Practices Document:** [stac-best-practices/best-practices-zarr.md](https://github.com/radiantearth/stac-best-practices/blob/main/best-practices-zarr.md)

**EOPF STAC Patterns**

| Resource | Link |
|----------|------|
| EOPF STAC PR | [PR #54](https://github.com/EOPF-Sample-Service/eopf-stac/pull/54) |
| Live Catalog | [api.explorer.eopf.copernicus.eu/browser](https://api.explorer.eopf.copernicus.eu/browser/) |

**Achievements:**
- Largest effort to-date representing Zarr stores in STAC
- Assets vs bands pattern establishment
- ESA-specific best practices

---

<div class="large-space"></div>

### Community Resources

**Zarr Summit Rome (October 2025)**

- **Recap:** [cloudnativegeo.org/blog/2025/11/2025-zarr-summit-recap](https://cloudnativegeo.org/blog/2025/11/2025-zarr-summit-recap/)
- **Outcome:** Established the Zarr Conventions framework

**First STAC Sprint in Europe**

- **Location:** ESA/ESRIN
- **Flagship:** EOPF Zarr Sentinel products

---

<div class="large-space"></div>

### Project Coordination

| Resource | Link |
|----------|------|
| GitHub Organization | [github.com/EOPF-Explorer](https://github.com/EOPF-Explorer) |
| Risk Register | [Coordination Issues](https://github.com/EOPF-Explorer/coordination/issues?q=is%3Aissue%20label%3Arisk) |
| Discussion Forum | [EOPF Discourse](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) |

**Relevant Coordination Issues**

| Issue | Topic | Link |
|-------|-------|------|
| #166 | OpenLayers coordination | [Issue #166](https://github.com/EOPF-Explorer/coordination/issues/166) |
| #169 | Technical coordination | [Issue #169](https://github.com/EOPF-Explorer/coordination/issues/169) |
| #180 | Standards coordination | [Issue #180](https://github.com/EOPF-Explorer/coordination/issues/180) |

---

<div class="large-space"></div>

### Data Model Specifications

**V0: Maximalist Compatibility (September 2025)**

Following GeoZarr 0.4:
- Zarr v3
- Climate and Forecast (CF) conventions integration
- Grid mapping 0D array implementation
- Simple CRS + Affine transform approach
- GDAL compatibility in v3.12

**V1: Zarr Conventions (January 2026)**

- Multiscales Zarr convention
- Projection Zarr convention
- Spatial Zarr convention
- Full GDAL support path

**Multiscales Pyramid Implementation**

| Resolution | Type | Notes |
|------------|------|-------|
| 10m | Native | Untouched from Zarr Samples Service |
| 20m | Native | Untouched from Zarr Samples Service |
| 60m | Native | Untouched from Zarr Samples Service |
| 120m | Overview | Downsampled from 60m by averaging |
| 360m | Overview | Downsampled from 120m by averaging |
| 720m | Overview | Downsampled from 360m by averaging |

**Chunking Strategy:**
- Dynamic chunking according to shard size
- Scene-per-band aligned sharding strategy
- Consolidated metadata at multiscale group level

---

<div style="margin-top: 2rem; padding: 1.5rem; background: var(--vp-c-bg-soft, #f6f6f7); border-radius: 8px;">
  <p style="margin: 0 0 1rem 0;"><strong>Questions or contributions?</strong></p>
  <a href="https://discourse.eopf.copernicus.eu/c/eopf-explorer/17" target="_blank" style="color: var(--vp-c-brand);">Join the discussion on EOPF Discourse →</a>
</div>
