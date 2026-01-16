# Plan: GeoZarr Data Model Leadership Page (Final)

Create an educational page at `datamodel/` showcasing EOPF Explorer's GeoZarr leadership, with a CSS-only timeline component, entry point from Features Gallery, and links to external demos.

## Steps

### 1. Create CSS timeline component

**File:** `.vitepress/theme/custom.css`

Add `.timeline`, `.timeline-item`, `.timeline-date` classes with vertical line, circular markers, and status styling (completed/ongoing/planned) using existing brand colors and Exo 2 font.

### 2. Create main page

**File:** `datamodel/index.md`

Using `layout: page` with:
- `<FeatureSection>` hero introducing GeoZarr Data Model Leadership
- Timeline component showing milestones: V0 Maximalist (2024) → Zarr Summit Rome (Oct 2025) → Zarr Conventions Released → GeoZarr v1 (Future)
- `<FeaturesGallery>` cards linking to the three conventions (multiscales, proj, spatial)
- `<CTASection>` linking to GeoZarr SWG and community discussion

### 3. Create technical deep dive sub-page

**File:** `datamodel/technical-deep-dive.md`

With:
- Links to all GitHub PRs from D-12 (GeoZarr spec, zarr-extensions, OpenLayers)
- Links to live OpenLayers examples (e.g., /software/ol)
- Zenodo convention references
- GDAL driver and client software links

### 4. Add Features Gallery card

**File:** `.vitepress/utils/content.js`

In `cardsContent` array as **second item** with:
- Title: "GeoZarr Data Model Leadership"
- Description about driving cloud-native EO standards
- Link to `/datamodel/`

### 5. Add catalog entry

**File:** `.vitepress/utils/content.js`

In `softwareServices` array with:
- Tags: `["standards", "geozarr", "zarr", "conventions"]`
- Category: `"Documentation"`
- Type: `"story"`

### 6. Create visual assets

**Location:** `public/assets/`

- `datamodel-icon.svg` — for Features Gallery card

**Interactive Diagram: Zarr Conventions as Pillars for GeoZarr**

Create an SVG or HTML/CSS diagram showing the three Zarr conventions as foundational pillars supporting the GeoZarr specification. Each element should be clickable:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      🌍 GeoZarr v1                          │
│           OGC Geospatial Zarr Specification                 │
│      https://github.com/zarr-developers/geozarr-spec        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│   │               │  │               │  │               │   │
│   │  Multiscales  │  │  Projection   │  │    Spatial    │   │
│   │               │  │   (geo-proj)  │  │               │   │
│   │   Pyramids    │  │   CRS/Datum   │  │ Array↔Coords  │   │
│   │               │  │               │  │               │   │
│   └───────────────┘  └───────────────┘  └───────────────┘   │
│         ▲                   ▲                   ▲           │
│         │                   │                   │           │
│   zarr-conventions/   zarr-conventions/   zarr-conventions/ │
│     multiscales          geo-proj            spatial        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   Zarr v3 Core  │
                    │  zarr.dev       │
                    └─────────────────┘
```

**Clickable Links for Diagram:**
- **GeoZarr v1:** https://github.com/zarr-developers/geozarr-spec
- **Multiscales:** https://github.com/zarr-conventions/multiscales
- **Projection (geo-proj):** https://github.com/zarr-conventions/geo-proj
- **Spatial:** https://github.com/zarr-conventions/spatial
- **Zarr Conventions (parent):** https://github.com/zarr-conventions/
- **Zarr Core:** https://zarr.dev/

## Further Considerations

### Timeline fallback

If CSS timeline proves too heavy or renders poorly, revert to `<DataTable>` with columns `[Phase, Timeline, Status]` — the data structure is compatible.

### Expand later

The `datamodel/` folder structure allows adding sub-pages as content grows:
- `datamodel/conventions.md`
- `datamodel/gdal.md`
- `datamodel/openlayers.md`

---

# Essential Content from D-12 Report

## Key Achievements

### Data Model Implementation

**Version 0 (Oct 2025) - Maximalist Compatibility Approach following GeoZarr 0.4:**
- Zarr v3
- Climate and Forecast (CF) conventions integration
- Grid mapping 0D array implementation
- Simple CRS + Affine transform approach
- GDAL compatibility path established in version 3.12

**Version 1 - Zarr Conventions:**
- Multiscales Zarr convention released
- Projection Zarr convention released
- Spatial Zarr convention released

**Multiscales Pyramid Implementation:**
- Native resolutions: 10m, 20m, 60m
- Overview resolutions: 120m, 360m, 720m (downsampled by averaging)
- Dynamic chunking with scene-per-band aligned sharding strategy
- Consolidated metadata at multiscale group level

---

## Zarr Conventions Created

Three foundational conventions released at [zarr-conventions](https://github.com/zarr-conventions/):

| Convention | Purpose | GitHub |
|------------|---------|--------|
| **Multiscales** | Encoding multiscale pyramid information for data stored in Zarr groups | https://github.com/zarr-conventions/multiscales |
| **Projection (geo-proj)** | Encoding datum and CRS information for geospatial data | https://github.com/zarr-conventions/geo-proj |
| **Spatial** | Describing the relationship between array indices and spatial coordinates | https://github.com/zarr-conventions/spatial |

---

## GeoZarr OGC SWG Contributions

| Contribution | Link |
|--------------|------|
| Clarify terminology across specification | https://github.com/zarr-developers/geozarr-spec/pull/89 |
| GeoZarr Multiscales Clarifications | https://github.com/zarr-developers/geozarr-spec/pull/86 |
| Make dimension binding for data variables match coordinate variables | https://github.com/zarr-developers/geozarr-spec/pull/85 |
| RFC: Reformat GeoZarr as registration of Zarr translations | https://github.com/zarr-developers/geozarr-spec/pull/67 |

---

## Zarr Extensions Proposals

| Proposal | Link |
|----------|------|
| Registered attributes in Zarr v3 | https://github.com/zarr-developers/zarr-extensions/pull/23 |
| Projection Attribute Extension for Zarr v3 | https://github.com/zarr-developers/zarr-extensions/pull/21 |

---

## Core Libraries Development

### eopf-geozarr Library (v0.6.1)
- Pydantic GeoZarr model
- Converter modules for S1, S2, S3
- CLI for dataset inspection, validation, conversion
- Docker image
- **Docs:** https://eopf-explorer.github.io/data-model/
- **Repo:** https://github.com/EOPF-Explorer/data-model

### zarr-python Enhancements
| Enhancement | Link |
|-------------|------|
| Option to preserve child metadata during consolidation | https://github.com/zarr-developers/zarr-python/issues/3289 |
| Fix invalid blosc defaults | https://github.com/zarr-developers/zarr-python/pull/3530 |
| Don't serialize consolidated metadata if None | https://github.com/zarr-developers/zarr-python/pull/3535 |
| Refactored warnings | https://github.com/zarr-developers/zarr-python/pull/3098 |

### xarray Ecosystem
| Contribution | Link |
|--------------|------|
| Fix Zarr Encoding Documentation | https://github.com/pydata/xarray/pull/10720 |
| Implement Zarr spatial and proj conventions support (rioxarray) | https://github.com/corteva/rioxarray/pull/883 |

---

## Client Software Enablement

### GDAL GeoZarr Driver
- **Status:** Phase 1 complete in GDAL v3.12
- **Impact:** Enables access from QGIS, ArcGIS, ENVI, R, Python ecosystem
- **Phase 2:** Full Zarr conventions support (contracted, in progress)
- **Docs:** https://gdal.org/en/stable/drivers/raster/zarr.html

### OpenLayers Enhancements
- Off-screen Canvas for advanced rendering (3D globe projection)
- Native GeoZarr rendering capabilities
- Integration with OpenGlobus for 3D globe
- Hybrid rendering strategy: native + OpenLayers fallback
- **Status:** Experimental in v10.7.1-dev, stabilization ongoing
- **Docs:** https://explorer.eopf.copernicus.eu/software/ol

### TiTiler GeoZarr Adapter
- Dynamic tiling with OGC Tiles API (XYZ)
- WMS/WMTS endpoints
- Band manipulation and arithmetic
- **API:** https://api.explorer.eopf.copernicus.eu/raster/

---

## STAC Integration

### STAC+Zarr Best Practices
- First comprehensive Zarr-STAC integration guidance
- **Link:** https://github.com/radiantearth/stac-best-practices/blob/main/best-practices-zarr.md

### EOPF STAC Patterns
- Largest effort to-date representing Zarr stores in STAC
- Assets vs bands pattern establishment
- ESA-specific best practices
- **PR:** https://github.com/EOPF-Sample-Service/eopf-stac/pull/54
- **Live catalog:** https://api.explorer.eopf.copernicus.eu/browser/

### STAC Sprint Participation
- First STAC Sprint in Europe at ESA/ESRIN
- EOPF Zarr Sentinel as flagship project

---

## Community Engagement

### Zarr Summit Rome (Oct 13-17, 2025)
- Established the **Zarr Conventions framework**
- Created the three foundational conventions (multiscales, projection, spatial)
- Community actively engaging and adopting conventions early
- **Recap:** https://cloudnativegeo.org/blog/2025/11/2025-zarr-summit-recap/

### GeoZarr SWG Leadership
- Development Seed team member appointed as **co-chair** after chair change
- Proposed pragmatic strategy using established conventions as GeoZarr v1 foundation

---

## Timeline of Key Milestones

| Date | Milestone | Status |
|------|-----------|--------|
| July 2025 | Project Kickoff | ✅ |
| July-Oct 2025 | Initial GeoZarr SWG discussions and PRs | ✅ |
| Sept 2025 | V0 Release (Maximalist approach) | ✅ |
| Oct 13-17, 2025 | Zarr Summit Rome - Conventions framework established | ✅ |
| Oct 2025 | Three Zarr Conventions released | ✅ |
| Dec 2025 | OpenLayers GeoZarr integration working | ✅ |
| Jan 2026 | GDAL Phase 1 complete (v3.12) | ✅ |
| Jan 2026 | V1 Release (Zarr Conventions approach) | ✅ |
| Feb 2026 | Service Opening | 📅 |
| Q3 2026 | GDAL Phase 2 (Full conventions support) | 📅 |
| TBD | GeoZarr v1 OGC Specification | 📅 |

---

## ESA Goals & Vision

### Why This Matters

> "This standardization work ensures that EOPF Zarr data is not locked into proprietary formats or single-application workflows, but becomes a true cloud-native standard accessible across the entire Earth Observation ecosystem."

### ESA's Cloud-Native Strategy
- **Common container format** across all Sentinel missions
- **Reduced product-specific software** needs
- **Cloud-native data access** - efficient network access without full downloads
- **Progressive visualization** - web-optimized products with multiscales
- **Ecosystem interoperability** - open standards enabling access from QGIS, ArcGIS, ENVI, Python, R, Julia, JavaScript

---

## Ongoing Work

- **S1 Pipeline:** Ready for S1 ARD GRD products
- **S3 Pipeline:** OLCI/SLSTR converter under finalization
- **GDAL Phase 2:** Full Zarr conventions support (contracted)
- **rioxarray:** Zarr spatial and proj conventions support (PR #883)
- **OpenLayers:** Stabilization from experimental to stable release

---

## Future Roadmap

- **GeoZarr v1 Specification:** Using established conventions as foundation for OGC-approved spec
- **Full ecosystem adoption:** GDAL, rioxarray, xarray complete support
- **S3 data products:** OLCI and SLSTR pipeline completion
- **Community consensus building:** Continue GeoZarr SWG engagement
