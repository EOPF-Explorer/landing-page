<template>
  <h3 class="text-center">{{ sectionTitle }}</h3>
  <div class="cards-gallery">
    <div v-for="card in cards" :key="card.id" class="card-wrapper">
      <Card
        :title="card.title"
        :content="card.content"
        :link="card.link"
        :icon="card.icon"
      />
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";

defineProps({
  sectionTitle: String,
  cards: {
    /** @type {import('vue').PropType<Array<{
            id: number | string,
            title: string,
            content: string,
            link?: { text: string, href: string },
            icon?: string
        }>>} */
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.text-center {
  text-align: center;
  margin-bottom: 3rem;
}
.cards-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
}

.card-wrapper {
  display: flex;
  flex: 1 1 250px;
  max-width: calc(25% - 16px);
  padding: 8px;
}

@media (max-width: 1200px) {
  .card-wrapper {
    max-width: calc(33.333% - 16px);
  }
}

@media (max-width: 960px) {
  .card-wrapper {
    max-width: calc(50% - 16px);
  }
}

@media (max-width: 640px) {
  .card-wrapper {
    max-width: 100%;
  }
}
</style>
