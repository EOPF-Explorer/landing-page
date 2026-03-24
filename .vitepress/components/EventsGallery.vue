<template>
  <div class="grid large-space margin-top">
    <div class="s12 m12 l12">
      <EventCard
        v-for="event in props.events"
        :key="event.title"
        :event="event"
        @open-dialog="openDialog"
      />
    </div>
  </div>

  <div
    class="overlay blur center-align"
    :class="{ active: !!activeDialogAction }"
    @click="closeDialog"
  ></div>
  <dialog
    class="surface elevate"
    style="min-width: 80%"
    :class="{ active: !!activeDialogAction }"
  >
    <h5 v-if="activeDialog?.title" v-html="activeDialog.title"></h5>
    <div class="large-space"></div>
    <div
      v-if="activeDialog?.description"
      class="medium-text"
      v-html="activeDialog.description"
    ></div>
    <div class="large-space"></div>
    <div v-if="activeDialog?.recording">
      <iframe
        v-if="!!activeDialog.recording"
        class="responsive margin-top"
        style="width: 100%; height: 30rem"
        :src="getYouTubeEmbedUrl(activeDialog.recording)"
        title="Webinar recording"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
    <nav class="right-align justify-end no-space">
      <button class="transparent link" @click="closeDialog">Close</button>
      <button
        v-if="!!activeDialog?.confirmLink"
        class="transparent link"
        @click="closeDialog"
      >
        <a
          :href="activeDialog.confirmLink.link"
          :target="activeDialog.confirmLink.target || '_blank'"
        >
          {{ activeDialog.confirmLink.text || "Open" }}
        </a>
      </button>
    </nav>
  </dialog>
</template>

<script setup>
import { computed, ref } from "vue";
import EventCard from "./EventCard.vue";

/** @typedef {{
 * link: string
 * text: string
 * target?: string
 * }} ConfirmLink */

/** @typedef {{
 * title?: string
 * description?: string
 * recording?: string
 * confirmLink?: ConfirmLink
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
 * title: string
 * image: string
 * chips: { text: string; class: string }[]
 * date?: string
 * location?: string
 * description?: string
 * action?: LinkAction | DialogAction
 * actions?: (LinkAction | DialogAction)[]
 * }} EventItem */

const props = defineProps({
  events: {
    type: /** @type {import('vue').PropType<EventItem[]>} */ (Array),
    required: true,
  },
});

/**
 * @param {string} url
 */
const getYouTubeEmbedUrl = (url) => {
  const shortMatch = url.match(/youtu\.be\/([\w-]{11})/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  const fullMatch = url.match(/[?&]v=([\w-]{11})/);
  if (fullMatch) {
    return `https://www.youtube.com/embed/${fullMatch[1]}`;
  }

  return "";
};

/** @type {import('vue').Ref<DialogAction | null>} */
const activeDialogAction = ref(null);

const activeDialog = computed(() => {
  if (!activeDialogAction.value) {
    return null;
  }
  return activeDialogAction.value.dialog;
});

/** @param {LinkAction | DialogAction} action */
const openDialog = (action) => {
  if (action.type !== "dialog") {
    return;
  }
  activeDialogAction.value = action;
};

const closeDialog = () => {
  activeDialogAction.value = null;
};
</script>
