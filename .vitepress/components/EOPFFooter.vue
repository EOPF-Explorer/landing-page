<template>
  <footer class="full-width large-padding" style="background: #003047">
    <div class="holder large-padding vertical-margin large-margin small-text">
      <div class="grid white-text">
        <div class="s12 m6 l3">
          <img :src="theme.logo.dark" style="max-height: 36px" />
          <p class="alt-text right-padding">
            The Earth Observation Processor Framework (EOPF) Sentinel Zarr
            Explorer is funded by the European Space Agency through the
            Copernicus Space Component programme.
          </p>
        </div>
        <div class="s12 m6 l3">
          <h6>Menu</h6>
          <client-only>
            <p v-for="nav in theme.nav" :key="nav.link">
              <a :href="nav.link" class="link">{{ nav.text }}</a>
            </p>
          </client-only>
        </div>
        <div class="s12 m6 l3">
          <h6>Credits</h6>
          <p>
            <a href="https://www.esa.int/" target="_blank" class="link"
              >European Space Agency (ESA)</a
            >
          </p>
        </div>
        <div class="s12 m6 l3">
          <h6>Useful links</h6>
          <p>
            <a
              href="https://github.com/EOPF-Explorer"
              target="_blank"
              class="link"
              >Our resources on GitHub</a
            >
          </p>
          <p>
            <a
              href="https://eopf-toolkit.github.io/eopf-101/"
              target="_blank"
              class="link"
              >EOPF Toolkit</a
            >
          </p>
          <p>
            <a
              href="https://zarr.eopf.copernicus.eu/"
              target="_blank"
              class="link"
              >EOPF Sentinel Zarr Samples</a
            >
          </p>
        </div>
      </div>
      <LogoSection
        :logos="[
          {
            alt: 'Programme of the European Union Logo',
            image: '/media/eu-logo-white.png',
            link: 'https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/programmes',
          },
          {
            alt: 'Copernicus Logo',
            image: '/media/copernicus-logo-white.png',
            link: 'https://www.copernicus.eu/en',
          },
          {
            alt: 'EOF Logo',
            image: '/media/eof-logo-white.png',
            link: 'https://eof.esa.int/',
          },
          {
            alt: 'ESA Co-funded Logo',
            image: '/media/esa-cofunded-white.png',
            link: 'https://www.esa.int/',
          },
        ]"
        :baseHeight="6"
      />
    </div>
  </footer>
</template>
<script setup>
import { useData, inBrowser, useRouter } from "vitepress";
const { theme, page } = useData();
</script>
