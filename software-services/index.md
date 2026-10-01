---
title: Software and Services
layout: page
---

### Software & Services

<client-only>
  <eox-itemfilter
    v-if="itemfilterReady"
    ref="itemFilterRef"
    :items="servicesContent"
    :filterProperties="filterProps"
    .showResults="false"
    .inlineMode="true"
    @filter="handleFilter"
    style="--select-filter-max-items: 10; margin-block: 2rem; z-index: 1"
  ></eox-itemfilter>
  <FeaturesGallery
    :key="galleryKey"
    background="transparent"
    sectionTitle=" "
    :cards="servicesResults"
    style="margin-top:-160px; z-index: 0"
  />
</client-only>

<script setup>
  import { ref, onMounted } from 'vue';
  import { withBase } from 'vitepress';
  import { servicesContent, TAG_ICONS } from "../.vitepress/utils/content";
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

  /**
   * @typedef {Object} ServiceItem
   * @property {string} title
   * @property {string} content
   * @property {string} image
   * @property {string} link
   * @property {string[]} tags
   * @property {string} category
   * @property {string} type
   * @property {number} [order]
   */

  /**
   * @param {CustomEvent} evt
   */
  const handleFilter = (evt) => {
    /** @type {ServiceItem[]} */
    const results = evt.detail.results;
    servicesResults.value = results
      .sort((a, b) => (a.order || 999) - (b.order || 999)) // Sort by order field
      .map(r => {
        /** @param {string[]} tags */
        const renderTags = (tags) => tags.map(t => 
          `<div class="chip" style="margin: 0 0.25rem 0.25rem 0; padding: 0.2rem 0.4rem; --_size: auto; font-size: small">${TAG_ICONS[t] ? `<i class='mdi ${TAG_ICONS[t]}'></i> ` : ''}${t}</div>`
        ).join("");

        return {
          ...r,
          content: `<div class="vertical-margin">${renderTags(r.tags)}</div>${r.content}`,
          icon:{
            html: `<img src="${withBase(r.image)}" style="height: 150px; width: 100%; object-fit:${r.contain ? 'contain' : 'cover'};" />`,
            height: 200,
            width: "100%"
          },
          link: {
            href: r.link.startsWith("http") ? r.link : withBase(r.link),
            target: r.link.startsWith("http") ? "_blank" : "_self"
          }
        };
      });
    galleryKey.value++;
    syncCategoryParam(evt.detail.filters?.category?.state);
  };

  onMounted(async () => {
    filterProps.value = buildFilterProps(new URLSearchParams(window.location.search).get('category'));
    itemfilterReady.value = await itemfilterLoaded;
  });
</script>
