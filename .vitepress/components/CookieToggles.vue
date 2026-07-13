<template>
  <div>
    <div
      v-for="(config, category) in cookieCategories"
      :key="category"
      :id="category"
      class="vertical-margin vertical-padding"
    >
      <nav>
        <div class="max">
          <h6 class="bold">{{ category }}</h6>
          <p>{{ config.description }}</p>
        </div>
        <label class="switch">
          <input
            type="checkbox"
            :checked="config.required"
            :disabled="config.required"
          />
          <span></span>
        </label>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRouter, withBase } from "vitepress";
import {
  enableTracking,
  showBanner,
  //@ts-expect-error no type declarations
} from "@eox/pages-theme-eox/src/helpers.js";

const router = useRouter();

const cookieCategories = {
  Essential: {
    description:
      "Cookies that are strictly necessary for basic website or app functionality.",
    required: true,
  },
  Analytics: {
    description:
      "Cookies that are required for analyzing website or app usage.",
    required: false,
  },
};

router.onBeforeRouteChange = /** @param {string} to */ (to) => {
  if (to === withBase("/cookie-settings")) {
    showBanner(false);
  } else {
    showBanner(
      !document.cookie.includes("mtm_cookie_consent") &&
        !document.cookie.includes("mtm_consent_removed"),
    );
  }
};

/** @type {HTMLInputElement | null} */
let analyticsInput = null;

const onAnalyticsToggle = () => {
  /** @type {any[]} */
  //@ts-expect-error provided internally
  const paq = window._paq;
  if (analyticsInput?.checked) {
    paq.push(["forgetUserOptOut"]);
    paq.push(["setCookieConsentGiven"]);
    paq.push(["rememberCookieConsentGiven"]);
    enableTracking(true, router);
  } else {
    paq.push(["optUserOut"]);
    enableTracking(false, router);
  }
};

onMounted(() => {
  setTimeout(() => {
    showBanner(false);
    analyticsInput = document.querySelector("#Analytics input");
    if (!analyticsInput) return;

    analyticsInput.checked = document.cookie.includes("mtm_cookie_consent");
    analyticsInput.addEventListener("input", onAnalyticsToggle);
  });
});

onUnmounted(() => {
  analyticsInput?.removeEventListener("input", onAnalyticsToggle);
});
</script>
