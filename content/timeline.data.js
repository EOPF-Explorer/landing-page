import { defineLoader } from "vitepress";

/** @type {import("./timeline.data").TimelineItem[]} */
const timelineItems = [
  {
    date: "July 2025",
    status: "completed",
    title: "🚀 Project Kickoff",
    description:
      "EOPF Explorer project begins with a mandate to establish visualization-ready Zarr products for Sentinel data.",
  },
  {
    date: "July - October 2025",
    status: "completed",
    title: "🤝 GeoZarr SWG Engagement",
    description:
      "Active contribution to the OGC GeoZarr Specifications Working Group. Submitted multiple proposals for terminology clarification, multiscales, and dimension binding.",
  },
  {
    date: "September 2025",
    status: "completed",
    title: "📦 V0 Release: Maximalist Approach",
    description:
      "First release with TiTiler following GeoZarr 0.4 with Zarr v3, CF conventions, grid mapping, and GDAL 3.12 compatibility.",
  },
  {
    date: "October 13-17, 2025",
    status: "completed",
    title: "🏛️ Zarr Summit Rome",
    description:
      "Breakthrough moment: Established the <strong>Zarr Conventions framework</strong> with the community. Created three foundational conventions that form the pillars of GeoZarr.",
    link: {
      href: "https://cloudnativegeo.org/blog/2025/11/2025-zarr-summit-recap/",
      text: "Read the recap →",
    },
  },
  {
    date: "December 2025",
    status: "completed",
    title: "🗺️ OpenLayers GeoZarr Integration",
    description:
      "Client-side Zarr rendering working in OpenLayers with full support for the new conventions.",
  },
  {
    date: "January 2026",
    status: "completed",
    title: "✅ V1 Release: Community Conventions",
    description:
      "Production release with Zarr Conventions approach. GDAL Phase 1 complete (v3.12). Service opening prepared.",
  },
  {
    date: "Q1-Q2 2026",
    status: "ongoing",
    title: "🌱 Ecosystem Adoption",
    description:
      "Time Series Support. TiTiler enhancement. GDAL Effort Phase 2 for full conventions support. rioxarray integration. OpenLayers stabilization from experimental to stable.",
  },
  {
    date: "Future",
    status: "planned",
    title: "🎯 GeoZarr v1 OGC Specification",
    description:
      "Using established conventions as the foundation for the official OGC-approved GeoZarr specification.",
  },
];

export default defineLoader({
  load() {
    return { timelineItems };
  },
});
