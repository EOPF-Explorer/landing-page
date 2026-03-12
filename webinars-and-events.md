---
layout: page
---

# Webinars & Events

Stay up to date with the latest advancements, events, and releases from the EOPF Explorer community.

<EventsGallery :events="events" />

<script setup>
import EventsGallery from './.vitepress/components/EventsGallery.vue'

/** @typedef {{
 * title?: string
 * description?: string
 * recording?: string
 * confirmLink?: {
 *   link: string
 *   text: string
 *   target?: string
 * }
 * }} DialogConfig */

/** @typedef {{
 * type: 'link'
 * text: string
 * link: string
 * target?: string
 * }} LinkAction */

/** @typedef {{
 * type: 'dialog'
 * text: string
 * dialog: DialogConfig
 * }} DialogAction */

/** @typedef {{
 * title:string
 * image:string
 * chips: {text:string;class:string}[]
 * date?:string
 * location?:string
 * description?: string
 * action?: LinkAction | DialogAction
 * actions?: (LinkAction | DialogAction)[]
 * }} EventItem */

/** @type {EventItem[]} */
const events = [
  {
    title: 'EOPF Explorer Webinar #2 - Advanced Analysis with Sentinel Zarr',
    image: '/assets/globe-hero.jpg',
    chips: [
      { text: 'Upcoming event', class: 'green-text' },
    ],
    // date: 'Wednesday, April 15, 2026 at 3:00 PM CET',
    date: 'Mon 20 Apr 2026 15:00 - 16:00 CEST',
    location: 'Online',
    description: `Webinar #2 focuses on advanced cloud-native analysis with Sentinel Zarr, covering TiTiler server-side rendering, openEO integration, and practical workflows that take users from exploration to actionable insights.`,
    actions: [
      {
        type: 'dialog',
        text: 'View details',
        dialog: {
          title: 'EOPF Explorer Webinar #2 - Advanced Analysis with Sentinel Zarr',
          description: `Following the launch session focused on discovery and screening, this second webinar dives deeper into analysis workflows enabled by the EOPF Sentinel Zarr Explorer.
        <br/><br/>
        If Webinar #1 showed you what is possible, Webinar #2 explores how to go further.
        <br/><br/>
        <strong>What This Session Focuses On</strong>
        <br/>
        We move beyond browsing and band combinations into:
        <ul>
          <li>On-the-fly analysis with cloud-native Sentinel Zarr</li>
          <li>Server-side rendering and advanced band expressions using TiTiler</li>
          <li>Moving from visual exploration to structured analytical workflows</li>
          <li>Bridging into tools such as openEO / openEO Studio</li>
          <li>Building interactive stories and dashboards (eodash / EOxElements)</li>
        </ul>
        This session will demonstrate how the EOPF Explorer supports the full user journey, from initial discovery to actionable analysis, without requiring traditional download-heavy workflows.
        <br/><br/>
        <strong>Why This Matters</strong>
        <br/>
        Zarr is the planned future distribution format for Copernicus Sentinel data.
        <br/><br/>
        The EOPF Explorer demonstrates how enhanced GeoZarr conventions unlock:
        <ul>
          <li>Faster analysis directly in the browser</li>
          <li>Scalable cloud-native processing</li>
          <li>Reduced friction between exploration and insight</li>
          <li>Open standards-based interoperability</li>
        </ul>
        For developers, this means access to:
        <ul>
          <li>Client-side rendering (OpenLayers + WebGL)</li>
          <li>Server-side visualization (TiTiler)</li>
          <li>Open specifications (STAC, GeoZarr conventions)</li>
        </ul>
        For users and researchers, this means:
        <ul>
          <li>Immediate analytical capability</li>
          <li>Less overhead</li>
          <li>Faster experimentation and iteration</li>
        </ul>
        <strong>Addressing Common Questions</strong>
        <ul>
          <li>How the Explorer relates to the Zarr Sample Service</li>
          <li>What is evolving in the GeoZarr conventions</li>
          <li>When broader Sentinel distribution in this enhanced format may happen</li>
          <li>How you can engage now and shape the direction of EOPF</li>
        </ul>
        This is an exciting phase of development: community input matters.
        <br/><br/>
        <strong>Who Should Attend</strong>
        <ul>
          <li>Earth observation data users and researchers</li>
          <li>Data scientists interested in cloud-native workflows</li>
          <li>Web developers creating geospatial applications</li>
          <li>Anyone curious about the future of Copernicus data distribution</li>
        </ul>
        <strong>Learn More</strong>
        <ul>
          <li>Software and services: <a href="https://explorer.eopf.copernicus.eu/software-services" target="_blank" rel="noopener">https://explorer.eopf.copernicus.eu/software-services</a></li>
          <li>Data model: <a href="https://explorer.eopf.copernicus.eu/datamodel/" target="_blank" rel="noopener">https://explorer.eopf.copernicus.eu/datamodel/</a></li>
          <li>Project site: <a href="https://explorer.eopf.copernicus.eu/" target="_blank" rel="noopener">https://explorer.eopf.copernicus.eu/</a></li>
        </ul>
        Be part of the conversation. Shape the future of Sentinel data use.`,
          confirmLink: {
            link: 'https://buytickets.at/thrivegeo/2073515/r/explorerwebsite',
            text: 'Register now',
            target: '_blank'
          }
        }
      },
      {
        type: 'link',
        text: 'Register now',
        link: 'https://buytickets.at/thrivegeo/2073515/r/explorerwebsite',
        target: '_blank'
      }
    ]
  },
  {
    title: 'Cloud-Native Sentinel Data: EOPF Sentinel Zarr Explorer Launch Webinar',
    image: '/assets/globe-hero.jpg',
    chips: [
      { text: 'Past event', class:"" },
      { text: 'Recording', class:""}
    ],
    date:new Date("03-09-2026").toString().split(" ").splice(0,4).join(" "),
    location: 'Online',
    description: `This webinar marks the official launch of the EOPF Sentinel Zarr Explorer, a new platform enabling cloud-native visualisation of Copernicus Sentinel data directly in the browser.`,
    action: {
      type: 'dialog',
      text: 'View details',
      dialog: {
        title: 'EOPF Sentinel Zarr Explorer Launch Webinar',
        description: `This webinar marks the official launch of the EOPF Sentinel Zarr Explorer, a new platform enabling cloud-native visualisation of Copernicus Sentinel data directly in the browser.
        <br/>
        In this session, experts from ESA, Development Seed, EOX, and thriveGEO demonstrate how GeoZarr-formatted Sentinel data can be explored instantly without downloads or preprocessing. The Explorer shows how open-source technologies enable fast, scalable access to Earth observation data.
        <br/>
        The webinar walks through the full workflow: from STAC-based discovery to real-time visualisation and storytelling with satellite imagery.
        <br/>
        Get the slides
        https://drive.google.com/file/d/14nW0...
        <br/>
        What you’ll see in this webinar
        <ul>
        <li>Browsing Sentinel data using STAC catalogs</li>
        <li>Real-time visualisation of Sentinel imagery in the browser</li>
        <li>Dynamic band combinations and rapid data screening</li>
        <li>Cloud-native workflows powered by GeoZarr</li>
        <li>Open-source tools including OpenLayers, GDAL, and TiTiler</li>
        <li>Why this matters</li>
        <li>Zarr is the planned future distribution format for Copernicus Sentinel data.</li>
        </ul>
        <br/>
        The EOPF Explorer demonstrates how cloud-native data formats enable faster access, scalable analysis, and interactive exploration of Earth observation datasets.
        <br/>
        EOPF Sentinel Zarr Explorer
        https://explorer.eopf.copernicus.eu/s...
        <br/>
        Learn more about the data model
        https://explorer.eopf.copernicus.eu/d...
        <br/>
        Upcoming webinar
        📅 April 20 | 15:00-16:00 CET
        <br/>
        Join our online workshop exploring advanced analysis workflows using Sentinel Zarr data, including server-side visualisation and analytical tools such as TiTiler and openEO.
        <br/>
        Register here
        https://buytickets.at/thrivegeo/20735...
        <br/>
        #EOPF #Copernicus #EarthObservation #GeoZarr #CloudNative #SentinelData #Geospatial #OpenSource`,
        recording: 'https://www.youtube.com/watch?v=ddR5OEF4-yM',
      }
    }
  }
]
</script>