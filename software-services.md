---
title: Software and Services
layout: page
---

### Software & Services

<client-only>
  <eox-itemfilter
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
  import { ref } from 'vue';
  import { withBase } from 'vitepress';
  import { servicesContent } from "./.vitepress/utils/content";

  const servicesResults = ref([]);
  const galleryKey = ref(0);

  const filterProps = [
    {
      "key": "category",
      "title": "By category",
      "expanded": true
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

  // Filter handler
  const handleFilter = (evt) => {
    servicesResults.value = evt.detail.results.map(r => ({
      ...r,
      content: `<div class="vertical-margin">${r.tags.map(t => `<div class="chip" style="margin: 0 0.25rem 0.25rem 0; padding: 0.2rem 0.4rem; --_size: auto; font-size: small">${t}</div>`).join("")}</div>${r.content}`,
      icon:{
        html: `<img src="${r.image}" style="height: 150px; width: 100%; object-fit: cover" />`,
        height: 200,
        width: "100%"
      },
      link: {
        text: `View ${r.type}`,
        href: r.link.startsWith("http") ? r.link : withBase(r.link),
        target: r.link.startsWith("http") ? "_blank" : "_self"
      }
    }));
    galleryKey.value++;
  };
</script>
