---
layout: page
llm:
  - heading: Webinars and events
    source: ../content/events.data.js
    items: events
    title: title
    fields:
      - field: chips
        label: Topics
      - field: metadata
        label: When and where
      - content
      - field:
          - link
          - secondaryLink
        label: Links
---

# Webinars & Events

Join the EOPF community to learn about cloud-native Earth Observation, explore the Sentinel Zarr Explorer, and see how open-source developers and scientists are adopting GeoZarr conventions.

<FeaturesGallery :cards="events" :columns="3" variant="poster" background="transparent" :sectionTitle="false" />

### News & Events from the EOPF Community

<div class="large-space"/>
<LogoSection :logos="newsLogos" :baseHeight="8" :strength="1.5" ></LogoSection>
<div class="large-space"/>



<CTASection style="margin-bottom:0px"
  title="Join the discussion!"
  tagline="We welcome your feedback and contributions."
  primaryButton="Visit the EOPF Forum"
  primaryLink="https://discourse.eopf.copernicus.eu/c/eopf-explorer/17"
  dark
/>

<script setup>
import { withBase } from 'vitepress'
import { data as eventsData } from '../content/events.data.js'

const newsLogos = [
  {
    image: withBase('/media/eopf-sample-service-logo.svg'),
    alt: 'EOPF Sentinel Zarr Samples / CDSE Events',
    link: 'https://zarr.eopf.copernicus.eu/knowledge-hub/',
    target:"_blank"
  },
  {
    image: withBase('/media/eopf-toolkit-logo.svg'),
    alt: 'EOPF Toolkit',
    link: 'https://github.com/eopf-toolkit',
    target:"_blank"
  },
  {
    image: withBase('/media/cdse-logo.png'),
    alt: 'CDSE',
    link: 'https://dataspace.copernicus.eu/events',
    target:"_blank"
  },
  {
    image: withBase('/media/sentinel-online-logo.png'),
    alt: 'Sentinel News',
    link: 'https://sentinels.copernicus.eu/web/sentinel/sentinel-news',
    target:"_blank"
  }
]

const events = eventsData.events.map((event) => ({ ...event, image: withBase(event.image) }));
</script>
