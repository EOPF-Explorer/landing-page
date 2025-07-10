---
layout: home
hero:
  name: Hello World!
  text: Sentinel Zarr Explorer
  tagline: The Earth Observation Processing Framework Sentinel Zarr Explorer
  # image:
  #   src: http://picsum.photos/800/600
  #   alt: Hero Image
  background:
    src: "data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='100' fill='%23013144' /%3E%3C/svg%3E"
    alt: Background Image
  actions:
    - theme: brand
      text: Primary action
      link: /foo
    - theme: secondary
      text: Secondary action
      link: /bar
footer: false
---

### Let's get started!
Put your content here.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod mi sed tortor mattis, sed maximus enim tempor. Cras vehicula eu elit aliquam aliquet. Integer pulvinar purus at ultrices faucibus.

<FeatureSection
  icon="mdi-application-brackets-outline"
  image="http://picsum.photos/801/601"
  landing
  primaryButton="Read more"
  primaryLink="/features/feature-a"
  tagline="Be ready for this awesome feature"
  title="Feature A"
>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod mi sed tortor mattis, sed maximus enim tempor. Cras vehicula eu elit aliquam aliquet. Integer pulvinar purus at ultrices faucibus.
</FeatureSection>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod mi sed tortor mattis, sed maximus enim tempor. Cras vehicula eu elit aliquam aliquet. Integer pulvinar purus at ultrices faucibus.

<CTASection
  title="Ready to try this?"
  tagline="Let the visitor know what your main call to action is! Then, let them click below."
  primaryButton="Get started"
  primaryLink="/foo/bar"
/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod mi sed tortor mattis, sed maximus enim tempor. Cras vehicula eu elit aliquam aliquet. Integer pulvinar purus at ultrices faucibus.

<FeatureSection
  icon="mdi-monitor-dashboard"
  image="http://picsum.photos/802/602"
  landing
  primaryButton="Read more"
  primaryLink="/features/feature-b"
  tagline="For this, even readier"
  title="Feature B"
  dark
  reverse
>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod mi sed tortor mattis, sed maximus enim tempor. Cras vehicula eu elit aliquam aliquet. Integer pulvinar purus at ultrices faucibus.
</FeatureSection>


### Frequently Asked Questions
<br />
<details open>
  <summary>
    <p class="bold">+ Why tho?</p>
  </summary>
    <p class="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</details>
<details>
  <summary>
    <p class="bold">+ How?</p>
  </summary>
    <p class="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</details>
<details>
  <summary>
    <p class="bold">+ Where?</p>
  </summary>
    <p class="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <br />
    <img src="https://placehold.co/200x100">
    <br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</details>

<CTASection
  title="Ready to try this?"
  tagline="Let the visitor know what your main call to action is! Then, let them click below."
  primaryButton="Get started"
  primaryLink="/foo/bar"
  altButton="Get started"
  altLink="/foo/bar"
  dark
  style="margin-bottom: 0"
/>

<footer class="full-width large-padding" style="background: #013144">
  <div class="holder large-padding vertical-margin large-margin small-text">
    <div class="grid white-text">
      <div class="s12 m6 l3">
        <img :src="theme.logo.dark" style="max-height: 36px" />
        <p class="alt-text right-padding">The Earth Observation Processing Framework (EOPF) Zarr Samples Service is funded by the European Space Agency through the Copernicus Space Component programme.</p>
      </div>
      <div class="s12 m6 l3">
        <h6>Menu</h6>
        <p v-for="nav in theme.nav"><a :href="nav.link" class="link">{{nav.text}}</a></p>
      </div>
      <div class="s12 m6 l3">
        <h6>Credits</h6>
        <p><a href="https://www.esa.int/" target="_blank" class="link">European Space Agency (ESA)</a></p>
        <p><a href="https://zarr.eopf.copernicus.eu/image-credits/" target="_blank" class="link">Image and Video Credits</a></p>
        <p><a href="https://zarr.eopf.copernicus.eu/privacy-policy/" target="_blank" class="link">Privacy Policy</a></p>
      </div>
      <div class="s12 m6 l3">
        <h6>Useful links</h6>
        <p><a href="https://discourse.eopf.copernicus.eu/" target="_blank" class="link">Community Support Platform</a></p>
        <p><a href="https://github.com/EOPF-Sample-Service" target="_blank" class="link">Service's GitHub</a></p>
      </div>
    </div>
    <LogoSection
      :logos='[
        {
          alt: "Programme of the European Union Logo",
          image: "https://sample.eopf.copernicus.eu/wp-content/uploads/2025/02/2-6.png",
          link: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/programmes",
        },
        {
          alt: "Copernicus Logo",
          image: "https://sample.eopf.copernicus.eu/wp-content/uploads/2025/02/1-6.png",
          link: "https://www.copernicus.eu/en",
        },
        {
          alt: "EOF Logo",
          image: "https://zarr.eopf.copernicus.eu/wp-content/uploads/2025/06/Eof-logo-Last-White.png",
          link: "https://eof.esa.int/",
        },
        {
          alt: "ESA Co-funded Logo",
          image: "https://sample.eopf.copernicus.eu/wp-content/uploads/2025/02/Untitled-design-2025-02-18T191818.227.png",
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
