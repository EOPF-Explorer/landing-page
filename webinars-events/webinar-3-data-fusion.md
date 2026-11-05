---
title: "EOPF Explorer Webinar #3: Updates on EOPF Zarr & Cloud-Native S1/S2 Data Fusion"
layout: page
---

# EOPF Explorer Webinar #3: Updates on EOPF Zarr & Cloud-Native S1/S2 Data Fusion

<div class="padding round margin-bottom row">
    <div class="max">
      <div>November 25, 2026 | 15:00-16:00 CET</div>
    </div>
</div>

<div class="grid">
<div class="s12 l8">

Join ESA, Development Seed, EOX and thriveGEO for the third EOPF Explorer webinar. We move beyond visualisation to show what EOPF Zarr can do for serious multi-mission analysis, and compare its performance against other data formats.

### What You Will Learn

Many applications need data from more than one Sentinel mission, but combining Sentinel-1 radar with Sentinel-2 optical imagery still requires stitching together separate access paths and processing stacks. In this webinar, you will see data fusion scenarios that bring Sentinel-1 and Sentinel-2 together with titiler-openeo, packaged as reusable process graphs that you can adapt to your own area and question.

We will also share benchmark results showing how the format performs in practice, and how design choices such as chunking and multiscale pyramids affect access and rendering speed. By the end, you will know how the EOPF Zarr format compares to Cloud-Optimised GeoTIFFs (COGs).

### Why It Matters

GeoZarr is the (visualisation) format for EOPF Zarr, and it is planned in the future distribution of Copernicus Sentinel data. A format is only as useful as the work it enables. The fusion scenarios show that EOPF Zarr supports analysis through a standard processing API, not just viewing. The benchmarks will help you to plan your own transition with more confidence.

Everything is built with open-source technology, including TiTiler, openEO, GDAL, OpenLayers and STAC, so what you see can be reused, adapted and improved by the community.

### Be Part of the Change

The EOPF Explorer is a community-driven project, and your voice shapes how Sentinel data will be accessed in the future. With growing adoption and ecosystem support, this is your opportunity to engage during development. This webinar is a continuation of a capacity-building series that started at the beginning of 2026. Join us to explore the next steps together.

### Who Should Attend

- Earth observation data users and researchers
- Data scientists interested in cloud-native workflows
- Web developers creating geospatial applications
- Anyone planning their transition to EOPF Zarr who wants to know how it performs

### Learn More

- Software and services: [https://explorer.eopf.copernicus.eu/software-services](/software-services/index)
- Data model: [https://explorer.eopf.copernicus.eu/software-services/datamodel/](/software-services/datamodel/index)
- Project site: [https://explorer.eopf.copernicus.eu/](/)

</div>
<div class="s12 l4">
  <div ref="ticketWidget" class="tt-widget" style="isolation: isolate">
    <div class="tt-widget-fallback">
      <p>
        <a :href="TICKET_CHECKOUT_URL" target="_blank">Click here to buy tickets</a><br />
        <small><a href="https://www.tickettailor.com?rf=wdg_180159" class="tt-widget-powered">Sell tickets online with Ticket Tailor</a></small>
      </p>
    </div>
  </div>
</div>
</div>

<CTASection style="margin-bottom:0px"
  title="Join the discussion!"
  tagline="We welcome your feedback and contributions."
  primaryButton="Visit the EOPF Forum"
  primaryLink="https://discourse.eopf.copernicus.eu/c/eopf-explorer/17"
  dark
/>

<script setup>
import { ref, onMounted } from "vue";

const TICKET_CHECKOUT_URL =
  "https://www.tickettailor.com/checkout/new-session/id/9360788/chk/f5dbebcb4f3051f4b519eb6bdc489850/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true";

/** @type {import('vue').Ref<HTMLDivElement | null>} */
const ticketWidget = ref(null);

// VitePress strips <script> tags from markdown, so the widget script is injected on mount.
onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js";
  Object.assign(script.dataset, {
    url: TICKET_CHECKOUT_URL,
    type: "inline",
    inlineMinimal: "true",
    inlineShowLogo: "false",
    inlineBgFill: "true",
    inlineInheritRefFromUrlParam: "",
    inlineRef: "website_widget",
  });
  ticketWidget.value?.appendChild(script);
});
</script>
