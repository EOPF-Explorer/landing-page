import { defineLoader } from "vitepress";

/** @type {import("./zarr-comparison.data").ComparisonRow[]} */
const rows = [
  {
    feature: 'Harmonised container format across all Sentinels',
    explorer: true,
    sampleService: true,
    safe: false,
    content: 'EOPF introduces Zarr as the common container format for all Sentinel missions, reducing the need for product-specific client software for loading the data. <a href="https://sentiwiki.copernicus.eu/web/safe-format">SAFE</a> products have different internal structures between Sentinel products and data file formats.',
  },
  {
    feature: 'Efficient network access',
    explorer: true,
    sampleService: true,
    safe: false,
    content: '<a href="https://zarr.readthedocs.io/">Zarr</a> is a <a href="https://guide.cloudnativegeo.org/zarr/intro.html">Cloud-Native</a> container format with self-describing chunked arrays that allows for reading metadata and dimensionality without loading the whole product. Read more: <a href="https://eopf-toolkit.github.io/eopf-101/02_about_eopf_zarr/21_what_is_zarr.html">EOPF Toolkit 101 - What is Zarr?</a>.<br/><br/>The <a href="https://sentiwiki.copernicus.eu/web/safe-format">Sentinel SAFE format (SentiWiki)</a> uses traditional file-based hierarchy with multiple XML metadata files and binary data in separate directories.',
  },
  {
    feature: 'Data chunking for efficient random access',
    explorer: true,
    sampleService: true,
    safe: false,
    content: 'Zarr provides superior data access performance through optimised chunking strategies, parallel I/O operations, and built-in compression algorithms (Blosc, LZ4, Zstd) that reduce data transfer times and memory usage. Read more: <a href="https://eopf-toolkit.github.io/eopf-101/03_about_chunking/31_zarr_chunking_intro.html">An Introduction to Zarr Chunking</a>.<br/><br/>SAFE loading performance is constrained by sequential file access and decompression of entire product archives.',
  },
  {
    feature: 'Scalable data loading',
    explorer: true,
    sampleService: true,
    safe: false,
    content: 'Zarr data loading scales horizontally with distributed chunk storage, enabling seamless integration with cloud storage systems, distributed computing frameworks (Dask, Xarray), and analysis-ready data architectures.<br/><br/>SAFE archives often need to be loaded as complete zipped products from a single access point.',
  },
  {
    feature: 'Discoverable metadata',
    explorer: true,
    sampleService: true,
    safe: false,
    content: 'Zarr stores metadata as JSON attributes directly within the array structure, providing programmatic access, version control compatibility, and flexible schema evolution.<br/><br/>SAFE metadata is distributed across multiple XML files which are harder to discover and parse.',
  },
  {
    feature: 'Interoperability',
    explorer: true,
    sampleService: true,
    safe: false,
    content: 'Zarr offers a broad ecosystem integration with Python (NumPy, Pandas, Xarray), <a href="https://eopf-toolkit.github.io/eopf-101/05_zarr_tools/51_eopf_stac_r.html">R</a>, Julia, JavaScript, and cloud-native technologies, providing standardised APIs across multiple programming languages and data science workflows.<br/><br/>SAFE product reading depends on specialised ESA tooling and product-specific libraries.',
  },
  {
    feature: 'Progressive visualisation',
    explorer: true,
    sampleService: false,
    safe: false,
    content: 'Zarr enables progressive visualisation with random access and direct integration with web-based visualization libraries (Observable, Jupyter widgets, TileDB).<br/><br/>EOPF Explorer Zarr is using a chunking strategy particularly suitable for area visualisation such as web maps and includes multi-resolution pyramids (multiscales) for interactive exploration at multiple zoom levels. Check out the <a href="https://explorer.eopf.copernicus.eu/sentinelexplorer/">EOPF Sentinel Explorer</a> to visualise EOPF Sentinel data right off distribution-grade products.<br/><br/>SAFE visualization requires preprocessing and full data extraction before rendering.',
  },
  {
    feature: 'Following Zarr Community Conventions',
    explorer: true,
    sampleService: false,
    safe: false,
    content: 'EOPF Explorer Zarr is relying on <a href="https://zarr.dev/conventions/">Zarr Conventions</a> for defining <a href=""https://github.com/zarr-developers/geozarr-spec?tab=readme-ov-file#conventions>geospatial-data-specific features in GeoZarr</a>, in particular georeference and . This means that the data format is recognised and discoverable by the community, which will hopefully lead to wider adoption by other data producers and software client libaries.<br/><br/>EOPF Sample Service Zarr currently uses a <a href="https://cpm.pages.eopf.copernicus.eu/eopf-cpm/main/PSFD/index.html">bespoke format</a> for encoding geospatial and multiscales information.',
  },
];

export default defineLoader({
  load() {
    return { rows };
  },
});