---
layout: page
footer: false
---
<script setup>
    import configURL from "./sentinel-explorer-config.js?url"
</script>
<style>
.VPContent {
    padding: 0 !important;
    margin: 0 !important
}
.VPPage {
    margin: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 0 !important;
    padding-top: 38px !important;
    max-width: 100% !important
}
</style>

<eo-dash style="display: block;height: calc(100dvh - var(--vp-nav-height) - 38px)" .config="configURL"></eo-dash>
