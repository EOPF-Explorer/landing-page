<template>
  <article class="tutorial card round border no-overflow">
    <!-- Demo Section (Always Visible) -->
    <div class="demo-view">
      <div v-if="$slots.description" class="description padding border-bottom">
        <slot name="description"></slot>
      </div>
      
      
      
      <div class="demo-wrapper relative border-bottom" :style="{ height: height }">
        <slot name="demo"></slot>
      </div>
    </div>

    <div v-if="$slots.controls" class="padding">
      <slot name="controls"></slot>
    </div>

    <!-- Code Section (Always Visible) -->
    <div class="code-view">
      <div class=" margin">
        <slot name="code"></slot>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  height: {
    type: String,
    default: '500px'
  }
})
</script>

<style scoped>
.tutorial {
  margin: 2rem 0;
}

.demo-wrapper {
  overflow: hidden;
}
</style>
