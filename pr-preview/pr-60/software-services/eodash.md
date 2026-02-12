---
url: /pr-preview/pr-60/software-services/eodash.md
---

## eodash&#x20;

### Overview

**eodash** is a STAC based EO dashboard builder that enables rapid deployment of Earth Observation data portals. It can be used as a standalone application, a library, or a web component.

It handles the complexity of connecting components (Map, Timeline, Date Picker, Item Filters) to a central store state, allowing developers to focus on configuration rather than wiring components together.

For more information and full documentation, visit:

* **Library Website**: [eodash.org](https://eodash.org)
* **Client library Documentation**: [eodash.github.io/eodash](https://eodash.github.io/eodash/)
* **GitHub Repository**: [github.com/eodash](https://github.com/eodash)

### Key Features

* **Client-side Rendering**: Responsive and interactive dashboards rendered directly in the browser, ensuring a dynamic data visualization experience.
* **Integrate your APIs**: Show customized charts to visualize your results and integrate all your data sources.
* **Endpoint Integration**: Connect to various data sources and APIs, bringing your GeoZarr data into one place. Define and execute data processing workflows using a flexible configuration.
* **Customizable Themes**: Customize the look and feel of your dashboard through theme definitions.

::: warning GeoZarr Support
Currently, **eodash** only supports **server-side** GeoZarr rendering. **Client-side** GeoZarr rendering is an upcoming feature.
Please check the [GitHub Releases](https://github.com/eodash/eodash/releases) to stay tuned for updates.
:::

### STAC Catalog Generation

The **[eodash\_catalog](https://github.com/eodash/eodash_catalog)** is a Python library designed to simplify the creation of STAC catalogs that utilize the [eodash extension](https://github.com/eodash/eodash_extension) to support eodash instances.

It automates the generation of collection and item metadata, ensuring compatibility with the dashboard's visualization capabilities. Check the [Wiki](https://github.com/eodash/eodash_catalog/wiki) for detailed usage instructions and configuration examples.

### Installation

::: info NPM (Recommended)

```bash
npm install @eodash/eodash
```

:::

::: info CDN (Quick Testing)

```html
<script type="module" src="https://unpkg.com/@eodash/eodash/dist/eodash.js"></script>
```

:::

### Architecture

eodash is built on a **reactive core architecture** that decouples state management from the user interface.

1. **Centralized State Store**:\
   At the heart of the application lies a global store that serves as the single source of truth. It manages critical application state such as the current time range, spatial extent (Area of Interest), active layers, and selected data items.

2. **Configuration-Driven**:\
   The dashboard's layout, capabilities, and data connections are entirely defined by a structured configuration object. This approach eliminates the need for boilerplate code, allowing instances to be spun up or reconfigured dynamically.

3. **Reactive Data Flow**:\
   Data fetched from the configured STAC endpoint is normalized and ingested into the central store. Changes to the state—whether triggered by user interaction or automated workflows—are instantly propagated to all subscribed components, ensuring a synchronized and consistent view across the entire dashboard without manual event handling.

### Next Steps

1. **Start with Examples**: Work through the [example](./dashboard) to understand the how it can be configured
2. **Explore API Documentation**: checkout the [eodash](https://eodash.org) website for more information
3. **Community**: Join [discussions](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) and contribute to the growing EOPF ecosystem
