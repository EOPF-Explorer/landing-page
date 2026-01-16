---
title: Pioneering the GeoZarr Data Model
layout: page
---

<script setup>
import { withBase } from 'vitepress';
</script>

<div class="hero-section" style="text-align: center; padding: 3rem 1rem; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 12px; margin-bottom: 2rem;">
  <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">🌍 Pioneering the GeoZarr Data Model</h1>
  <p style="font-size: 1.2rem; color: #64748b; max-width: 800px; margin: 0 auto;">
    Driving the standardization of cloud-native geospatial data formats for the Earth Observation community
  </p>
</div>

## Our Mission

The EOPF Explorer project is at the forefront of establishing **GeoZarr** as the foundation for cloud-native Earth Observation data. Through intensive collaboration with the Zarr community, we've developed and released foundational conventions that enable interoperable, efficient access to geospatial data across the entire EO ecosystem.

> *"This standardization work ensures that EOPF Zarr data is not locked into proprietary formats or single-application workflows, but becomes a true cloud-native standard accessible across the entire Earth Observation ecosystem."*

---

<div class="large-space"></div>

## The Journey: From Vision to Community Standards

<div class="timeline">
  <div class="timeline-item completed">
    <span class="timeline-date">July 2025</span>
    <h4>🚀 Project Kickoff</h4>
    <p>EOPF Explorer project begins with a mandate to establish visualization-ready Zarr products for Sentinel data.</p>
  </div>
  
  <div class="timeline-item completed">
    <span class="timeline-date">July - October 2025</span>
    <h4>🤝 GeoZarr SWG Engagement</h4>
    <p>Active contribution to the OGC GeoZarr Specifications Working Group. Submitted multiple proposals for terminology clarification, multiscales, and dimension binding.</p>
  </div>
  
  <div class="timeline-item completed">
    <span class="timeline-date">September 2025</span>
    <h4>📦 V0 Release: Maximalist Approach</h4>
    <p>First release with TiTiler following GeoZarr 0.4 with Zarr v3, CF conventions, grid mapping, and GDAL 3.12 compatibility.</p>
  </div>
  
  <div class="timeline-item completed">
    <span class="timeline-date">October 13-17, 2025</span>
    <h4>🏛️ Zarr Summit Rome</h4>
    <p>Breakthrough moment: Established the <strong>Zarr Conventions framework</strong> with the community. Created three foundational conventions that form the pillars of GeoZarr. <a href="https://cloudnativegeo.org/blog/2025/11/2025-zarr-summit-recap/" target="_blank">Read the recap →</a></p>
  </div>
  
  <div class="timeline-item completed">
    <span class="timeline-date">December 2025</span>
    <h4>🗺️ OpenLayers GeoZarr Integration</h4>
    <p>Client-side Zarr rendering working in OpenLayers with full support for the new conventions.</p>
  </div>
  
  <div class="timeline-item completed">
    <span class="timeline-date">January 2026</span>
    <h4>✅ V1 Release: Community Conventions</h4>
    <p>Production release with Zarr Conventions approach. GDAL Phase 1 complete (v3.12). Service opening prepared.</p>
  </div>
  
  <div class="timeline-item ongoing">
    <span class="timeline-date">Q1-Q2 2026</span>
    <h4>🌱 Ecosystem Adoption</h4>
    <p>GDAL Phase 2 for full conventions support. rioxarray integration. OpenLayers stabilization from experimental to stable.</p>
  </div>
  
  <div class="timeline-item planned">
    <span class="timeline-date">Future</span>
    <h4>🎯 GeoZarr v1 OGC Specification</h4>
    <p>Using established conventions as the foundation for the official OGC-approved GeoZarr specification.</p>
  </div>
</div>

---

<div class="large-space"></div>

## The Foundation: Zarr Conventions

At the Zarr Summit in Rome, we established a new approach: instead of a monolithic GeoZarr specification, we created modular **Zarr Conventions** that can be adopted incrementally and evolved independently.

<div class="conventions-diagram">
  <div class="geozarr-roof">
    <h3>🌍 GeoZarr Specification</h3>
    <p>OGC Geospatial Zarr Standard</p>
    <a href="https://github.com/zarr-developers/geozarr-spec" target="_blank">zarr-developers/geozarr-spec →</a>
  </div>
  
  <div class="conventions-pillars">
    <div class="pillar">
      <h4>📐 Multiscales</h4>
      <p>Encoding pyramid information for multi-resolution data</p>
      <a href="https://github.com/zarr-conventions/multiscales" target="_blank">View Convention →</a>
    </div>
    <div class="pillar">
      <h4>🗺️ Projection</h4>
      <p>CRS and datum encoding for geospatial data</p>
      <a href="https://github.com/zarr-conventions/geo-proj" target="_blank">View Convention →</a>
    </div>
    <div class="pillar">
      <h4>📍 Spatial</h4>
      <p>Array indices to spatial coordinates relationship</p>
      <a href="https://github.com/zarr-conventions/spatial" target="_blank">View Convention →</a>
    </div>
  </div>
  
  <div class="zarr-foundation">
    <a href="https://zarr.dev/" target="_blank">Zarr v3 Core</a>
  </div>
</div>

<p style="text-align: center; margin-top: 1rem;">
  <a href="https://github.com/zarr-conventions/" target="_blank" style="font-weight: 600;">Explore all Zarr Conventions →</a>
</p>

---

<div class="large-space"></div>

## Why This Matters for ESA

The European Space Agency's cloud-native strategy depends on open, interoperable standards. EOPF Explorer's Zarr Conventions work directly supports ESA's vision for the future of Earth Observation data:

| Goal | How Zarr Conventions Help |
|------|---------------------------|
| 📦 **Common container format** | One format across all Sentinel missions reduces product-specific software needs |
| ☁️ **Cloud-native access** | Efficient network access without downloading entire products |
| 🔍 **Progressive visualization** | Multiscales enable interactive exploration at any zoom level |
| 🔗 **Ecosystem interoperability** | QGIS, ArcGIS, ENVI, Python, R, Julia, JavaScript can all read the same data |
| 🛡️ **Future-proof standards** | Community-driven specifications ensure long-term sustainability |

<div style="margin-top: 1.5rem; padding: 1rem 1.5rem; border-left: 4px solid #22c55e; border-radius: 0 8px 8px 0;">
  <p style="margin: 0; font-size: 0.95rem;"><strong>🎯 The Result:</strong> EOPF Zarr data is not locked into proprietary formats — it's a true cloud-native standard accessible across the entire Earth Observation ecosystem.</p>
</div>

---

<div class="large-space"></div>

## Client Software Enablement

Our conventions work is enabling a growing ecosystem of tools:

#### TiTiler

Dynamic tile server with OGC Tiles API, WMS/WMTS endpoints, and band arithmetic.

- [TiTiler EOPF API](https://api.explorer.eopf.copernicus.eu/raster/)

#### GDAL (v3.12+)

The de facto standard for geospatial data access now supports EOPF Zarr, enabling access from **QGIS**, **ArcGIS**, **ENVI**, and the entire desktop GIS ecosystem.

- [GDAL Zarr Driver Documentation](https://gdal.org/en/stable/drivers/raster/zarr.html)
- Phase 2 (full conventions support) in progress

#### OpenLayers

Browser-based visualization with native GeoZarr rendering, including off-screen Canvas for 3D globe projection.

- [OpenLayers GeoZarr Example](../software/ol)
- Experimental in v10.7.1-dev, stabilization ongoing

---

<div class="large-space"></div>

## Community Leadership

#### GeoZarr SWG Contributions

We actively contributed to the OGC GeoZarr Specifications Working Group (SWG), submitting multiple proposals that shaped the current discussion on terminology, multiscales, and dimension binding. We proposed a pragmatic strategy that uses the established conventions as the foundation for GeoZarr v1.

#### STAC Integration

We authored the first comprehensive [STAC best practices for Zarr integration](https://github.com/radiantearth/stac-best-practices/blob/main/best-practices-zarr.md) and participated in the [STAC+Zarr Sprint at ESA/ESRIN](https://cloudnativegeo.org/blog/2025/11/stac-zarr-community-sprint-2025-recap/).

---

<div class="large-space"></div>

## Learn More

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
  <a href="/datamodel/technical-deep-dive" class="button">
    📚 Technical Deep Dive
  </a>
  <a href="https://discourse.eopf.copernicus.eu/c/eopf-explorer/17" target="_blank" class="button white">
    💬 Join the Discussion
  </a>
  <a href="https://github.com/zarr-conventions/" target="_blank" class="action-button" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--vp-c-bg-soft, #f6f6f7); color: var(--vp-c-text-1); border-radius: 8px; text-decoration: none; font-weight: 600; border: 1px solid var(--vp-c-divider);">
    🔧 Zarr Conventions
  </a>
</div>
