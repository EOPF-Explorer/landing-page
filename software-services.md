---
title: Software and Services
layout: page
---

### Software & Services

<client-only>
  <eox-itemfilter
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
  import { ref, computed, onMounted } from 'vue';
  import { withBase } from 'vitepress';
  import { servicesContent } from "./.vitepress/utils/content";

  const servicesResults = ref([]);
  const galleryKey = ref(0);
  const itemFilterRef = ref(null);
  const urlCategory = ref(null);

  // Compute filter properties with URL-based state
  const filterProps = computed(() => {
    const baseFilterProps = [
      {
        "key": "category",
        "title": "By category",
        "expanded": true,
        "state": urlCategory.value ? { [urlCategory.value]: true } : undefined
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
    
    return baseFilterProps;
  });

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
    
    // Update URL based on filtered results
    try {
      const url = new URL(window.location);
      const categories = [...new Set(servicesResults.value.map(r => r.category))];
      
      if (categories.length === 1) {
        // Single category selected
        const newCategory = categories[0];
        if (newCategory !== urlCategory.value) {
          url.searchParams.set('category', newCategory);
          urlCategory.value = newCategory;
          window.history.replaceState({}, '', url);
        }
      } else {
        // Multiple or no categories (clear filter)
        if (urlCategory.value) {
          url.searchParams.delete('category');
          urlCategory.value = null;
          window.history.replaceState({}, '', url);
        }
      }
    } catch (error) {
      console.log('URL update error:', error);
    }
  };

  // Initialize from URL parameters
  onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
      urlCategory.value = categoryParam;
    }
  });
</script>
