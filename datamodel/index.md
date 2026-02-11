---
title: Pioneering the GeoZarr Data Model
layout: page
---

<script setup>
import GeoZarrDiagram from "../.vitepress/components/GeoZarrDiagram.vue"
import { timelineItems, getStatusColor } from "../.vitepress/utils/content.js"
</script>

<div class="hero-section" style="text-align: center; padding: 3rem 1rem; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 12px; margin-bottom: 2rem;">
  <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">🌍 Pioneering the GeoZarr Data Model</h1>
  <p style="font-size: 1.2rem; color: #64748b; max-width: 800px; margin: 0 auto;">
    Driving the standardization of cloud-native geospatial data formats for the Earth Observation community
  </p>
</div>

### Our Mission

The EOPF Explorer project is at the forefront of establishing **GeoZarr** as the foundation for cloud-native Earth Observation data. Through intensive collaboration with the Zarr community, we've developed and released foundational conventions that enable interoperable, efficient access to geospatial data across the entire EO ecosystem.

> *"This standardization work ensures that EOPF Zarr data is not locked into proprietary formats or single-application workflows, but becomes a true cloud-native standard accessible across the entire Earth Observation ecosystem."*

---

<div class="large-space"></div>

### The Journey: From Vision to Community Standards

<div class="timeline">
  <div 
    v-for="item in timelineItems" 
    :key="item.date" 
    :class="['timeline-item', item.status]"
    >
    <span 
      class="bold small-text" 
      :style="{ color: getStatusColor(item.status), display: 'block', marginBottom: '0.25rem' }"
    >
      {{ item.date }}
    </span>
    <h6 class="no-margin" style="margin-bottom: 0.5rem !important;">{{ item.title }}</h6>
    <p class="medium-text no-margin" style="opacity:0.7">
      <span v-html="item.description"></span>
      <span v-if="item.link">
      <br/>
      <a :href="item.link.href" target="_blank" class="link"> {{ item.link.text }}</a>
      </span>
    </p>
  </div>
</div>

---

<div class="large-space"></div>

### The Foundation: Zarr Conventions

At the Zarr Summit in Rome, we established a new approach: instead of a monolithic GeoZarr specification, we created modular **Zarr Conventions** that can be adopted incrementally and evolved independently.

<client-only>
  <GeoZarrDiagram with-links />
</client-only>


---

<div class="large-space"></div>

### Why This Matters

Open, interoperable standards enable broader adoption and long-term sustainability of Earth Observation data. EOPF Explorer's Zarr Conventions work establishes a community-driven foundation for cloud-native Earth Observation:

| Goal | How Zarr Conventions Help |
|------|---------------------------|
| 📦 **Common container format** | One format across all Sentinel missions reduces mission-specific reader software needs |
| ☁️ **Cloud-native access** | Efficient network access without downloading entire products |
| 🔍 **Progressive visualization** | Multiscales enable interactive exploration at any zoom level |
| 🔗 **Ecosystem interoperability** | QGIS, ArcGIS, ENVI, Python, R, Julia, JavaScript can all read the same data |
| 🛡️ **Future-proof standards** | Community-driven specifications ensure long-term sustainability |

<div style="margin-top: 1.5rem; padding: 1rem 1.5rem; border-left: 4px solid #22c55e; border-radius: 0 8px 8px 0;">
  <p style="margin: 0; font-size: 0.95rem;"><strong>🎯 The Result:</strong> EOPF Zarr data uses community standards rather than bespoke data models — making it accessible across the entire Earth Observation ecosystem without mission-specific reader software.</p>
</div>

---

<div class="large-space"></div>

### Client Software Enablement

Our conventions work is enabling a growing ecosystem of tools:

##### TiTiler

Dynamic tile server with OGC Tiles API, WMS/WMTS endpoints, and band arithmetic.

- [TiTiler EOPF API](https://api.explorer.eopf.copernicus.eu/raster/)

##### GDAL (v3.12+)

The de facto standard for geospatial data access now supports EOPF Zarr, enabling access from **QGIS**, **ArcGIS**, **ENVI**, and the entire desktop GIS ecosystem.

- [GDAL Zarr Driver Documentation](https://gdal.org/en/stable/drivers/raster/zarr.html)
- Phase 2 (full conventions support) in progress

##### OpenLayers

Browser-based visualization with native GeoZarr rendering, including off-screen Canvas for 3D globe projection using [EOxMap](/software-services/eoxelements/globe).

- [OpenLayers GeoZarr Example](https://deploy-preview-17194--ol-site.netlify.app/en/dev/examples/geozarr.html)
- Experimental in v10.7.1-dev, stabilization ongoing

---

<div class="large-space"></div>

### Community Leadership

##### GeoZarr SWG Contributions

We actively contributed to the OGC GeoZarr Specifications Working Group (SWG), submitting multiple proposals that shaped the current discussion on terminology, multiscales, and dimension binding. We proposed a pragmatic strategy that uses the established conventions as the foundation for GeoZarr v1.

##### STAC Integration

We authored the first comprehensive [STAC best practices for Zarr integration](https://github.com/radiantearth/stac-best-practices/blob/main/best-practices-zarr.md) and participated in the [STAC+Zarr Sprint at ESA/ESRIN](https://cloudnativegeo.org/blog/2025/11/stac-zarr-community-sprint-2025-recap/).

---

<div class="large-space"></div>

### Learn More
<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1.5rem 0 1.5rem 0;">
  <a href="/datamodel/technical-deep-dive" class="button">
    📚 Technical Deep Dive
  </a>
  <a href="https://discourse.eopf.copernicus.eu/c/eopf-explorer/17" target="_blank" class="button border">
    💬 Join the Discussion
  </a>
  <a href="https://github.com/zarr-conventions/" target="_blank" class="button border">
    🔧 Zarr Conventions
  </a>
</div>
