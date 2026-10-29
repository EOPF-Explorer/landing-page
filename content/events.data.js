import { defineLoader } from "vitepress";

/** Image paths are site-absolute; the page adds the base */
/** @type {import("./events.data").WebinarEvent[]} */
const events = [
  {
    id: 4,
    title:
      "EOPF Explorer Webinar #3: Updates on EOPF Zarr & Cloud-Native S1/S2 Data Fusion",
    image: "/media/webinar-3-background.png",
    chips: [
      { text: "Analysis", class: "mdi mdi-chart-box" },
      { text: "Upcoming event" },
    ],
    metadata: [
      { text: "Wed 25 Nov 2026 15:00 - 16:00 CET", icon: "mdi-calendar-blank" },
      { text: "Online", icon: "mdi-map-marker-outline" },
    ],
    content: `Join the next EOPF Explorer webinar, where we walk through the latest EOPF Zarr developments: Sentinel-1 + Sentinel-2 data fusion, COG vs EOPF Zarr benchmarking, and EOPF Zarr updates & roadmap.`,
    link: {
      text: "View details",
      href: "/webinars-events/webinar-3-data-fusion",
      target: "_self",
    },
  },
  {
    id: 3,
    title: "EOPF Sentinel Zarr Explorer - FOSS4G Europe 2026 Workshop",
    image: "/media/foss4g-bg.png",
    chips: [
      { text: "Workshop", class: "mdi mdi-school" },
      { text: "Screening", class: "mdi mdi-map" },
    ],
    metadata: [
      { text: "Fri 03 Jul 2026", icon: "mdi-calendar-blank" },
      { text: "Timișoara, Romania", icon: "mdi-map-marker-outline" },
    ],
    content: `A hands-on FOSS4G Europe workshop on web visualisation techniques for the GeoZarr specification, building interactive maps from cloud-native Copernicus Sentinel data with EOxElements, eox-storytelling, TiTiler, eodash, and Jupyter.`,
    secondaryLink: {
      text: "View materials",
      href: "https://github.com/EOPF-Explorer/foss4g-workshop",
      target: "_blank",
    },
  },
  {
    id: 1,
    title: "EOPF Explorer Webinar #2 - Advanced Analysis with Sentinel Zarr",
    image: "/media/webinar-2-background.png",
    chips: [
      { text: "Analysis", class: "mdi mdi-chart-box" },
      { text: "Recording" },
    ],
    metadata: [
      {
        text: "Mon 20 Apr 2026 15:00 - 16:00 CEST",
        icon: "mdi-calendar-blank",
      },
      { text: "Online", icon: "mdi-map-marker-outline" },
    ],
    content: `Webinar #2 focuses on advanced cloud-native analysis with Sentinel Zarr, covering TiTiler server-side rendering, openEO integration, and practical workflows that take users from exploration to actionable insights.`,
    link: {
      text: "View details",
      href: "/webinars-events/webinar-2-advanced-analysis",
      target: "_self",
    },
    secondaryLink: {
      text: "Watch recording",
      href: "https://www.youtube.com/watch?v=UP8BNWb5JI8",
      target: "_blank",
    },
  },
  {
    id: 2,
    title:
      "EOPF Explorer Webinar #1 - Introducing Visualisation-Enhanced Sentinel Zarr",
    image: "/media/webinar-1-background.png",
    chips: [
      { text: "Discovery", class: "mdi mdi-compass" },
      { text: "Screening", class: "mdi mdi-map" },
      { text: "Recording" },
    ],
    metadata: [
      {
        text: new Date("03-09-2026")
          .toString()
          .split(" ")
          .splice(0, 4)
          .join(" "),
        icon: "mdi-calendar-blank",
      },
      { text: "Online", icon: "mdi-map-marker-outline" },
    ],
    content: `This webinar marks the official launch of the EOPF Sentinel Zarr Explorer, a new platform enabling cloud-native visualisation of Copernicus Sentinel data directly in the browser.`,
    link: {
      text: "View details",
      href: "/webinars-events/webinar-1-visualisation",
      target: "_self",
    },
    secondaryLink: {
      text: "Watch recording",
      href: "https://www.youtube.com/watch?v=ddR5OEF4-yM",
      target: "_blank",
    },
  },
];

export default defineLoader({
  load() {
    return { events };
  },
});
