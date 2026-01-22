<template>
  <div class="grid large-space padding center-align">
    <!-- Header -->
    <div class="s12">
      <div class="center-align">
        <article class="center-align small-padding header-card">
          <h5 class="no-margin" style="color: white">
            🌍 GeoZarr Specification
          </h5>
          <p class="small-text no-margin">OGC Geospatial Zarr Standard</p>
          <a
            v-if="withLinks"
            href="https://github.com/zarr-developers/geozarr-spec"
            target="_blank"
            class="no-decoration"
          >
            <span class="medium-text underline"
              >zarr-developers/geozarr-spec →</span
            >
          </a>
        </article>
      </div>
    </div>

    <!-- Pillars -->
    <div v-for="pillar in pillars" :key="pillar.title" class="s12 m6 l4">
      <div style="height: 100%">
        <article class="border center-align small-padding pillar-card">
          <h6
            class="no-margin strong large-text bold"
            style="color: var(--primary)"
          >
            {{ pillar.title }}
          </h6>
          <p class="small-text no-margin" style="opacity: 0.7">
            {{ pillar.description }}
          </p>
          <div class="space"></div>
          <a
            v-if="withLinks"
            :href="pillar.link"
            target="_blank"
            class="no-decoration"
            style="display: block"
          >
            <span class="small-text" style="color: var(--primary)">{{
              pillar.linkText
            }}</span>
          </a>
        </article>
      </div>
    </div>

    <!-- Footer -->
    <div class="s12">
      <a
        v-if="withLinks"
        href="https://zarr.dev/"
        target="_blank"
        class="no-decoration footer-full-width"
      >
        <article class="border center-align medium-padding footer-card">
          <span class="medium-text bold">Zarr v3 Core</span>
        </article>
      </a>
      <article v-else class="border center-align medium-padding footer-card">
        <span class="medium-text bold">Zarr v3 Core</span>
      </article>
    </div>
  </div>
</template>

<script setup>
defineProps({
  withLinks: {
    type: Boolean,
    default: false,
  },
});

const pillars = [
  {
    title: "📐 Multiscales",
    description: "Encoding pyramid information for multi-resolution data",
    link: "https://github.com/zarr-conventions/multiscales",
    linkText: "View Convention →",
  },
  {
    title: "🗺️ Projection",
    description: "CRS and datum encoding for geospatial data",
    link: "https://github.com/zarr-conventions/geo-proj",
    linkText: "View Convention →",
  },
  {
    title: "📍 Spatial",
    description: "Array indices to spatial coordinates relationship",
    link: "https://github.com/zarr-conventions/spatial",
    linkText: "View Convention →",
  },
];
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
  color: inherit;
}
.header-card {
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  color: white;
}
.pillar-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--primary);
}
.footer-full-width {
  display: block;
}
.footer-card {
  border: 2px solid var(--primary);
}
article {
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
article:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
