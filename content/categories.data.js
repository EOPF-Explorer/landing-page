import { defineLoader } from "vitepress";

/** @type {import("./categories.data").Category[]} */
const categories = [
  {
    title: "Discovery",
    icon: "mdi-compass-outline",
    content: "Cloud-native and visualisation-enhanced EOPF Sentinel products power many aspects of Earth observation data discovery and analysis. Begin by exploring data clients catalogs through standard clients like STAC Browser that reveal Sentinel scenes at a glance.",
    linkText: "Discover Data",
  },
  {
    title: "Screening",
    icon: "mdi-palette-outline",
    content: "To screen products more closely, you can experiment with band combinations, color formulations, and custom arithmetic expressions to unlock spectral, polarization or any variables insights.",
    linkText: "Browse Sentinel Zarr",
  },
  {
    title: "Analysis",
    icon: "mdi-chart-box-outline",
    content: "Sophisticated analysis workflows can be built from Open EO clients for prototyping, dynamic web maps with on-the-fly reprojection, and interactive time-series exploration.",
    linkText: "Experiment",
  },
  {
    title: "Showcases",
    icon: "mdi-rocket-outline",
    content: "Compelling showcases demonstrate real-world applications – from flood delineation and burnt area mapping to spectral indices and collaborative workspaces – all powered by cloud-native visualization technologies.",
    linkText: "See Showcases",
  },
];

export default defineLoader({
  load() {
    return { categories };
  },
});