<template>
  <article class="tutorial card round border no-overflow">
    <!-- Demo Section (Always Visible) -->
    <div class="demo-view">
      <div v-if="$slots.description" class="description padding border-bottom">
        <slot name="description"></slot>
      </div>

      <div
        class="demo-wrapper relative border-bottom"
        :style="{ height: height }"
        v-if="$slots.demo"
      >
        <slot name="demo"></slot>
      </div>
    </div>

    <div v-if="$slots.controls" class="padding">
      <slot name="controls"></slot>
    </div>

    <!-- Code Section (Always Visible) -->
    <div class="code-view">
      <div class="margin">
        <slot name="code"></slot>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  height: {
    type: String,
    default: "500px",
  },
});
</script>

<style scoped>
.tutorial {
  margin: 2rem 0;
}

.demo-wrapper {
  overflow: hidden;
}

:deep(code *),
:deep(pre *),
:deep(.vp-code *),
:deep(.url-display),
:deep(kbd),
:deep(samp),
:deep(var),
:deep(.monospace) {
  font-family:
    "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono",
    "Ubuntu Mono", "Courier New", monospace !important;
}

/* Inline code */
:deep(code) {
  background: #f6f8fa;
  color: #24292e;
  padding: 2px 4px;
  border-radius: 16px;
  font-size: 0.9em;
}

/* Code blocks */
:deep(pre) {
  background: #f6f8fa;
  color: #24292e;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.4;
  margin: 16px 0;
  border: 1px solid #e1e4e8;
}

/* Code inside pre blocks */
:deep(pre code) {
  background: transparent;
  color: #24292e;
  padding: 0;
  border-radius: 16px;
  font-size: inherit;
}

/* VitePress copy button styling */
:deep(.copy) {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: var(--vp-code-copy-code-bg, #f6f8fa);
}

/* Hide language labels in code blocks */
:deep(span.lang) {
  display: none !important;
}

:deep(a) {
  color: #0366d6;
}
</style>
