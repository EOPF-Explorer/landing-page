---
title: Software and Services
layout: page
---

### Software & Services

<!-- Reserves the filter bar's height so the prerendered cards don't shift when it loads -->
<div style="min-height: 48px; margin-block: 2rem; position: relative; z-index: 1">
  <client-only>
    <eox-itemfilter
      v-if="itemfilterReady"
      ref="itemFilterRef"
      :items="data.services"
      :filterProperties="filterProps"
      .showResults="false"
      .inlineMode="true"
      @filter="handleFilter"
      style="--select-filter-max-items: 10"
    ></eox-itemfilter>
  </client-only>
</div>
<FeaturesGallery
  :key="galleryKey"
  background="transparent"
  sectionTitle=" "
  :cards="servicesResults"
  style="margin-top:-160px"
/>

<script setup>
  import { ref, onMounted } from 'vue';
  import { data } from "../content/services.data.js";
  import { byOrder, toServiceCard } from "../.vitepress/utils/services";
  import { loadModule } from "../.vitepress/utils/load-module";

  const itemfilterLoaded = loadModule(() => import("@eox/itemfilter"), "eox-itemfilter");
  const itemfilterReady = ref(false);
  /** @type {import('vue').Ref<any[]>} */
  const servicesResults = ref([]);
  const galleryKey = ref(0);
  const itemFilterRef = ref(null);
  /** @type {import('vue').Ref<object[]>} */
  const filterProps = ref([]);

  /**
   * Itemfilter config with the URL category preselected. Build once only.
   * @param {string | null} category
   */
  const buildFilterProps = (category) => [
    {
      "key": "category",
      "title": "By category",
      "expanded": true,
      "state": category ? { [category]: true } : undefined
    },
    {
      "keys": [
        "title",
        "content",
        "tags"
      ],
      "title": "By keyword",
      "type": "text",
      "placeholder": "Search for keyword",
      "expanded": false
    },
    {
      "key": 'tags',
      "title": 'By tag'
    }
  ];

  /**
   * Mirrors a single selected category into the URL.
   * @param {Record<string, boolean> | undefined} categoryState
   */
  const syncCategoryParam = (categoryState) => {
    const selected = Object.keys(categoryState ?? {}).filter((c) => categoryState?.[c]);
    const url = new URL(window.location.href);
    if (selected.length === 1) {
      url.searchParams.set('category', selected[0]);
    } else {
      url.searchParams.delete('category');
    }
    window.history.replaceState({}, '', url);
  };

  // All cards up front so they are prerendered; the itemfilter narrows them on the client
  servicesResults.value = data.services.map(toServiceCard);

  /**
   * @param {CustomEvent} evt
   */
  const handleFilter = (evt) => {
    servicesResults.value = [...evt.detail.results].sort(byOrder).map(toServiceCard);
    galleryKey.value++;
    syncCategoryParam(evt.detail.filters?.category?.state);
  };

  onMounted(async () => {
    filterProps.value = buildFilterProps(new URLSearchParams(window.location.search).get('category'));
    itemfilterReady.value = await itemfilterLoaded;
  });
</script>
