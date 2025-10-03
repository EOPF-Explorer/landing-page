---
layout: false
---

<script setup>
    const config = async() => await import("./sentinel-explorer-config").then(async m => await m["default"])
</script>
<!-- <style>
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
</style> -->
<style scoped>
eo-dash {
  --primary: #003047 !important;
  --secondary: #00ae9d !important;
  --on-primary: #ffff !important
}
</style>
<NavBar></NavBar>
<eo-dash style="display: block;height: calc(100dvh - var(--vp-nav-height))" .config="config"></eo-dash>