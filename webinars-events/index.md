---
layout: page
---

# Webinars & Events

Join the EOPF community to learn about cloud-native Earth Observation, explore the Sentinel Zarr Explorer, and see how open-source developers and scientists are adopting GeoZarr conventions.

<FeaturesGallery :cards="events" :columns="3" variant="poster" background="transparent" :sectionTitle="false" style="margin-top:-80px;z-index:0" />

<script setup>
const events = [
  {
    id:1,
    title: 'EOPF Explorer Webinar #2 - Advanced Analysis with Sentinel Zarr',
    image: '/assets/sentinel-2.png',
    chips: [
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
    title: 'Cloud-Native Sentinel Data: EOPF Sentinel Zarr Explorer Launch Webinar',
    image: '/assets/globe-hero.jpg',
    chips: [
      { text: 'Past event', class:"" },
      { text: 'Recording', class:""}
    ],
    metadata: [
      { text: new Date("03-09-2026").toString().split(" ").splice(0,4).join(" "), icon: 'mdi-calendar-blank' },
      { text: 'Online', icon: 'mdi-map-marker-outline' }
    ],
    content: `This webinar marks the official launch of the EOPF Sentinel Zarr Explorer, a new platform enabling cloud-native visualisation of Copernicus Sentinel data directly in the browser.`,
    link: {
        text: 'View details',
        href: './launch-webinar',
       target:"_self"
      }
    
  }
]
</script>