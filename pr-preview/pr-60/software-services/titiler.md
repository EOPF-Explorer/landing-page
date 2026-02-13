---
url: /pr-preview/pr-60/software-services/titiler.md
---

## Titiler Integration&#x20;

### Overview

This guide demonstrates how to use Titiler-EOPF, a specialized tile server that provides on-the-fly visualization of EOPF's Zarr-formatted satellite data. Unlike client-side processing, Titiler handles complex calculations server-side and delivers optimized tiles for web mapping applications.

::: tip :bulb: **Checking [API](https://api.explorer.eopf.copernicus.eu/raster) Status**:Verifying Titiler service availability...
:::

::: warning :warning: **[API](https://api.explorer.eopf.copernicus.eu/raster) Unavailable**:: The Titiler service appears to be temporarily unavailable. Some examples may not work as expected.
:::

::: info&#x20;**&#x20;What You'll Learn**
This integration guide covers server-side tile generation using EOPF's Titiler service, enabling you to build responsive web applications without handling complex data processing in the browser. Each example demonstrates practical implementation patterns for real-world applications.

**Sample Data** used here are available in [the Sentinel-2 L2A collection in STAC Browser](https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a)
:::

### Quick Start

::: info&#x20;**&#x20;Get Started in 5 Minutes**
Ready to dive in? Start with the [RGB Visualization example](./rgb) to see Titiler serving EOPF tiles in a web map, then explore NDVI calculations and spatial cropping techniques
:::


::: warning :warning: **Early Implementation**
This Titiler integration represents an early implementation of EOPF data services. Data availability, API stability, and library alignment will evolve over time as the platform matures.
:::

### API Documentation

::: info Interactive API Docs
[Swagger UI Documentation](https://api.explorer.eopf.copernicus.eu/raster/api.html)

Complete API reference with interactive examples and endpoint testing.
:::

::: info Base URL
<https://api.explorer.eopf.copernicus.eu/raster/>

All tile endpoints use this base URL for production integration.

:::

### Key Concepts

**Server-Side Processing**

Titiler-EOPF performs all data processing server-side, including:

* **On-the-fly tile generation** from Zarr datasets
* **Mathematical expressions** for band combinations and indices
* **Color enhancement** with gamma correction and contrast adjustment
* **Spatial operations** like cropping and reprojection

**Variable Naming Convention**

Band references use the format:

```
/measurements/reflectance:b04
```

* `measurements/reflectance` - Multiscales group path in Zarr structure
* `b04` - Specific band identifier (Red band)

**URL Structure**

Tile endpoints follow this pattern:

```
/raster/collections/{collection}/items/{item}/tiles/WebMercatorQuad/{z}/{x}/{y}.png
```

### Deployment Options

**1. [EOPF Explorer TiTiler](https://api.explorer.eopf.copernicus.eu/raster/) (Recommended)**

* **Pre-configured** with STAC catalog integration
* **Production-ready** endpoints with optimized performance
* **No authentication** required for public data
* **Automatic updates** with latest EOPF data

**2. Self-Hosted Instance**

For custom deployments, see the [titiler-eopf repository](https://github.com/EOPF-Explorer/titiler-eopf) for:

* Docker Compose setup instructions
* Kubernetes/Helm deployment guides
* Environment configuration examples
* Custom data source integration

### Next Steps

1. **Start with Examples**: Work through each [example](#integration-examples) to understand the capabilities
2. **Explore API Documentation**: Use the [interactive Swagger UI](https://api.explorer.eopf.copernicus.eu/raster/api.html) to test endpoints
3. **Browse EOPF Data**: Find datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
4. **Build Applications**: Integrate Titiler tiles into your web mapping projects
5. **Community**: Join [discussions](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) and contribute to the growing EOPF ecosystem

For the latest updates and advanced features, follow the [Titiler-EOPF project](https://github.com/EOPF-Explorer/titiler-eopf) and [EOPF Explorer platform](https://github.com/EOPF-Explorer) on GitHub.
