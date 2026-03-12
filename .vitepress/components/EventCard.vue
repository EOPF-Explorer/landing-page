<template>
  <article class="no-padding fill margin-bottom small-elevate">
    <div class="grid no-space surface">
      <div class="s12 m4 relative">
        <img v-if="event.image" class="responsive" :src="event.image" />
      </div>
      <div class="s12 m6">
        <div class="padding">
          <span
            v-for="chip in event.chips"
            :key="chip.text"
            class="small small-text chip"
            :class="chip.class"
          >
            {{ chip.text }}
          </span>
          <h5 class="small">{{ event.title }}</h5>
          <p v-if="event.date || event.location" class="small-text">
            <span v-if="event.date">
              <i class="small mdi mdi-calendar-blank"></i> {{ event.date }}
              <br />
            </span>
            <span v-if="event.location">
              <i class="small mdi mdi-map-marker-outline"></i>
              {{ event.location }}
            </span>
          </p>
          <p v-if="event.description" class="medium-text">
            {{ event.description }}
          </p>
          <nav>
            <template v-for="action in eventActions" :key="`${event.title}-${action.text}`">
            <a
              v-if="action.type === 'link'"
              class="button border secondary-text"
              :href="action.link"
              :target="action.target || '_blank'"
            >
              {{ action.text }}
            </a>
            <button
              v-else
              class="button border secondary-text"
              @click="$emit('open-dialog', action)"
            >
              {{ action.text }}
            </button>
            </template>
          </nav>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const eventActions = computed(() => {
  if (Array.isArray(props.event.actions) && props.event.actions.length > 0) {
    return props.event.actions;
  }

  if (props.event.action) {
    return [props.event.action];
  }

  return [];
});

defineEmits(["open-dialog"]);
</script>
