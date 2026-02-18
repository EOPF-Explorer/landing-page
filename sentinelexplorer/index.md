---
layout: page
footer: false
---

<script setup>
import {onMounted} from "vue"

onMounted(()=>{
  if (document.querySelector(".layout-home")) {
    window.location.reload();
  }
})
  
const config = async() => (await import("./sentinel-explorer-config")).default
</script>

<style scoped>
eo-dash {
  --primary: #003047 !important;
  --secondary: #00ae9d !important;
  --on-primary: #ffff !important;
  display: block;
  height: calc(100dvh - var(--vp-nav-height));
  width: 100%;
}
.VPPage:has(eo-dash#sentinel-explorer) {
  padding: 0;
  max-width: unset;
}
</style>

<ClientOnly>
<eo-dash id="sentinel-explorer" .config="config"></eo-dash>
</ClientOnly>