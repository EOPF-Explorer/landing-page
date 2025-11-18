<template>
  <div class="card">
    <div class="accent-line"></div>
    <div class="card-body">
      <div class="title">
        <div v-if="icon" v-html="icon" class="icon"></div>
        <h2>{{ title }}</h2>
      </div>
      <p class="content">
        <slot>{{ content }}</slot>
      </p>
      <a v-if="link" :href="link.href" target="_blank" class="link">
        {{ link.text }} <span class="arrow">&gt;</span>
      </a>
    </div>
  </div>
</template>
<script setup>
const { title, content, link } = defineProps({
  title: String,
  content: String,
  link: {
    /** @type {import('vue').PropType<{ text:string ,href: string }>} */
    type: Object,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
});
</script>
<style scoped>
.card {
  border: 1px solid var(--vp-c-bg-soft);
  /* border-radius: 12px; */
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition:
    border-color 0.25s,
    background-color 0.25s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  border-color: var(--secondary);
}

.accent-line {
  height: 3px;
  background-color: var(--secondary);
}

.card-body {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.title {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.title h2 {
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 28px;
  margin: 0;
  border: none;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.content {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin: 0;
}

.link {
  padding-top: 8px;
  font-weight: 800 !important;
  text-decoration: none;
  align-self: flex-start;
   color: var(--vp-c-text-1) !important;
}

.link:hover {
  color: var(--secondary);
}

.arrow {
  display: inline-block;
  margin-left: 4px;
  transition: transform 0.2s;
}

.link:hover .arrow {
  transform: translateX(4px);
}
</style>
