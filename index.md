---
layout: home
hero:
  name: Welcome!
  text: EOPF Sentinel Zarr Explorer
  tagline: Cloud-native data access and visualisation for the Earth Observation Processor Framework
  # image:
  #   src: http://picsum.photos/800/600
  #   alt: Hero Image
  background:
    src: "data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23013144' /%3E%3C/svg%3E"
    alt: Background Image
  actions:
    - theme: brand
      text: Data Model
      link: /foo
    - theme: secondary
      text: Browse Sentinels
      link: /bar
footer: false
---

### About the Project
The Sentinel Zarr Explorer project aims to develop and operate visualisation software and services for the European Space Agency's (ESA) Earth Observation Processor Framework (EOPF). 

This initiative addresses the critical need for efficient access and visualisation of Sentinel data as ESA transitions to the new EOPF Zarr format for Copernicus Earth Observation data.


<FeatureSection
  icon="mdi-application-brackets-outline"
  image="media/web-optimized-zarr.png"
  landing
  primaryButton="Read more"
  primaryLink="/features/feature-a"
  tagline="Web Otimized Zarr for EOPF"
  title="Data Model Development"
>
At the core of our activity is the development of a data model for web-optimised data access.

Read more about the considerations and design principles, as well as the relationship to ongoing community efforts for the GeoZarr and Web-Optimized Zarr (WOZ) conventions.
</FeatureSection>

### Our Goals

1. **Develop visualization software** that provides millisecond response times for interactive exploration of Sentinel EOPF Zarr data
2. **Operate a comprehensive visualization service** demonstrating the capabilities and efficiency of the new EOPF Zarr format
3. **Build community adoption** through open-source tools, documentation, and user engagement activities
4. **Provide performance benchmarks** demonstrating the efficiency and scalability of the Zarr format
5. **Create integration showcases** with existing Earth Observation tools and workflows
6. **Deliver comprehensive documentation** including user manuals, API documentation, and technical guides
7. **Establish a sustainable service** with monitoring, maintenance, and user support capabilities


<CTASection
  title="Join the discussion!"
  tagline="This is a community-driven project, and we welcome your feedback and contributions."
  primaryButton="Contact us"
  primaryLink="/foo/bar"
  altButton="Find us on GitHub"
  altLink="https://github.com/eopf-explorer"
  dark
/>


### Frequently Asked Questions
<br />
<details open>
  <summary>
    <p class="bold">+ What is EOPF?</p>
  </summary>
    <p class="small-text">The European Space Agency (ESA) is spearheading a significant modernization of its Earth observation data processing through the [Earth Observation Processor Framework (EOPF)](https://eopf.copernicus.eu/) initiative. The initiative represents a fundamental shift away from traditional, rigid data processing pipelines and towards a more flexible and efficient cloud-based environment.</p>
</details>
<details>
  <summary>
    <p class="bold">+ What is Zarr?</p>
  </summary>
    <p class="small-text">[Zarr](https://zarr.dev/) is a container format for storage of large N-dimensional typed arrays. The development of Zarr is motivated by the need for a simple, transparent, open, and community-driven format that supports high-throughput distributed I/O on different storage systems. </p>
</details>
<details>
  <summary>
    <p class="bold">+ What is GeoZarr?</p>
  </summary>
    <p class="small-text">[GeoZarr](https://github.com/zarr-developers/geozarr-spec) is an emerging convention to represent geo-spatial data in the Zarr container format.</p>
</details>
<details>
  <summary>
    <p class="bold">+ What is Web-Optimized Zarr?</p>
  </summary>
    <p class="small-text">[Web-optimized Zarr (WOZ)](https://developmentseed.org/geozarr-examples/web-optimized-zarr.html) provides a set of additional recommendations on top of the GeoZarr specification for optimal browser-based analysis and visualization. The specific recommendations are still under development.</p>
</details>
<details>
  <summary>
    <p class="bold">+ How are you engaged in open-source communities?</p>
  </summary>
    <p class="small-text">Technical contributors on our EOPF Sentinel Zarr Explorer are also actively engaged in the ongoing Zarr, GeoZarr and Web-Optimized Zarr community efforts and closely connected to other organisations that contribute. We seek to use the community-developed conventions as basis for our data model and thereby further their maturity and fitness for purpose.</p>
</details>
<details>
  <summary>
    <p class="bold">+ Will all EOPF Sentinel Zarr data be web-optimised?</p>
  </summary>
    <p class="small-text">The objective of this project is to demonstrate the benefits and prove the fitness for purpose of acessing Sentinel products as web-optimised Zarr. We hope that the success of our effort will drive a new value-added distribution format. Please follow our project for updates on our goals and outcome and share your questions and comments.</p>
</details>
<details>
  <summary>
    <p class="bold">+ How is this project related to the EOPF Sentinel Zarr Samples?</p>
  </summary>
    <p class="small-text">The [EOPF Sentinel Zarr Samples](https://zarr.eopf.copernicus.eu/) platform provides  </p>
</details>
<br />
<br />
<br />

<footer class="full-width large-padding" style="background: #013144">
  <div class="holder large-padding vertical-margin large-margin small-text">
    <div class="grid white-text">
      <div class="s12 m6 l3">
        <img :src="theme.logo.dark" style="max-height: 36px" />
        <p class="alt-text right-padding">The Earth Observation Processor Framework (EOPF) Sentinel Zarr Explorer is funded by the European Space Agency through the Copernicus Space Component programme.</p>
      </div>
      <div class="s12 m6 l3">
        <h6>Menu</h6>
        <p v-for="nav in theme.nav"><a :href="nav.link" class="link">{{nav.text}}</a></p>
      </div>
      <div class="s12 m6 l3">
        <h6>Credits</h6>
        <p><a href="https://www.esa.int/" target="_blank" class="link">European Space Agency (ESA)</a></p>
        <p><a href="https://explorer.eopf.copernicus.eu/image-credits/" target="_blank" class="link">Image and Video Credits</a></p>
        <p><a href="https://explorer.eopf.copernicus.eu/privacy-policy/" target="_blank" class="link">Privacy Policy</a></p>
      </div>
      <div class="s12 m6 l3">
        <h6>Useful links</h6>
        <p><a href="https://github.com/EOPF-Explorer" target="_blank" class="link">Our resources on GitHub</a></p>
        <p><a href="https://eopf-toolkit.github.io/eopf-101/" target="_blank" class="link">EOPF Toolkit</a></p>
        <p><a href="https://zarr.eopf.copernicus.eu/" target="_blank" class="link">EOPF Sentinel Zarr Samples</a></p>
      </div>
    </div>
    <LogoSection
      :logos='[
        {
          alt: "Programme of the European Union Logo",
          image: "media/eu-logo-white.png",
          link: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/programmes",
        },
        {
          alt: "Copernicus Logo",
          image: "media/copernicus-logo-white.png",
          link: "https://www.copernicus.eu/en",
        },
        {
          alt: "EOF Logo",
          image: "media/eof-logo-white.png",
          link: "https://eof.esa.int/",
        },
        {
          alt: "ESA Co-funded Logo",
          image: "media/esa-cofunded-white.png",
          link: "https://www.esa.int/",
        },
      ]'
      :baseHeight="6"
    />
  </div>
</footer>

<script setup>
import { useData } from 'vitepress';
const { theme } = useData();
</script>
