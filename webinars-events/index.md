---
layout: page
---

# Webinars & Events

Join the EOPF community to learn about cloud-native Earth Observation, explore the Sentinel Zarr Explorer, and see how open-source developers and scientists are adopting GeoZarr conventions.

<FeaturesGallery :cards="events" :columns="3" variant="poster" background="transparent" :sectionTitle="false" style="margin-top:-80px;z-index:0" />

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

const events = [
  {
    id:1,
    title: 'EOPF Explorer Webinar #2 - Advanced Analysis with Sentinel Zarr',
    image: withBase('/media/webinar-2-background.png'),
    chips: [
      { text: 'Analysis', class:"mdi mdi-chart-box" },
      { text: 'Upcoming event' },
    ],
    metadata: [
      { text: 'Mon 20 Apr 2026 15:00 - 16:00 CEST', icon: 'mdi-calendar-blank' },
      { text: 'Online', icon: 'mdi-map-marker-outline' }
    ],
    content: `Webinar #2 focuses on advanced cloud-native analysis with Sentinel Zarr, covering TiTiler server-side rendering, openEO integration, and practical workflows that take users from exploration to actionable insights.`,
    link: {
        text: 'View details',
        href: './webinar-2-advanced-analysis',
        target:"_self"
      },
    secondaryLink:{
        text: 'Register now',
        href: 'https://buytickets.at/thrivegeo/2073515/r/explorerwebsite',
        target: '_blank'
      }
  },
  {
    id:2,
    title: 'EOPF Explorer Webinar #1 - Introducing Visualisation-Enhanced Sentinel Zarr',
    image: withBase('/media/webinar-1-background.png'),
    chips: [
      { text: 'Discovery' , class:"mdi mdi-compass"},
      { text: 'Screening', class:"mdi mdi-map" },
      { text: 'Recording', }
    ],
    metadata: [
      { text: new Date("03-09-2026").toString().split(" ").splice(0,4).join(" "), icon: 'mdi-calendar-blank' },
      { text: 'Online', icon: 'mdi-map-marker-outline' }
    ],
    content: `This webinar marks the official launch of the EOPF Sentinel Zarr Explorer, a new platform enabling cloud-native visualisation of Copernicus Sentinel data directly in the browser.`,
    link: {
        text: 'View details',
        href: './webinar-1-visualisation',
       target:"_self"
      }
    
  }
]
</script>
