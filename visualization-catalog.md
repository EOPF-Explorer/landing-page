---
title: Visualization Capacity Catalog
layout: page
---

<script setup>
import { data as servicesData } from './.vitepress/data/services.data.js'
import { ref, onMounted } from 'vue'

const allItems = ref(servicesData)
const filteredItems = ref([...servicesData])

onMounted(() => {
  renderCatalog()
  updateStats()
  setupEventListeners()
})

function filterItems() {
  const searchTerm = document.getElementById('catalog-search')?.value.toLowerCase() || ''
  const categoryFilter = document.getElementById('category-filter')?.value || ''
  const typeFilter = document.getElementById('type-filter')?.value || ''
  const featuredOnly = document.getElementById('featured-filter')?.checked || false
  
  filteredItems.value = allItems.value.filter(item => {
    const matchesSearch = !searchTerm || 
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      item.category.toLowerCase().includes(searchTerm)
    
    const matchesCategory = !categoryFilter || item.category === categoryFilter
    const matchesType = !typeFilter || item.type === typeFilter
    const matchesFeatured = !featuredOnly || item.featured
    
    return matchesSearch && matchesCategory && matchesType && matchesFeatured
  })
  
  renderCatalog()
  updateStats()
}

function renderCatalog() {
  const grid = document.getElementById('services-grid')
  if (!grid) return
  
  if (filteredItems.value.length === 0) {
    grid.innerHTML = '<div class="empty-state">No items found matching your filters</div>'
  } else {
    grid.innerHTML = filteredItems.value.map(item => createItemCard(item)).join('')
  }
}

function createItemCard(item) {
  const categoryEmojis = {
    'Discovery': '🧭',
    'Screening': '🔬', 
    'Analysis': '📊',
    'Showcases': '🌟'
  }
  
  return `
    <div class="service-card ${item.featured ? 'featured' : ''}">
      <img src="${item.image}" alt="${item.title}" class="card-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="card-image" style="display: none;">
        📷 Image placeholder<br>
        <small>${item.title}</small>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-description">${item.description}</p>
        <div class="card-tags">
          <span class="category-tag">${categoryEmojis[item.category]} ${item.category}</span>
          ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="card-meta">
          <span class="card-type">${item.type}</span>
        </div>
        <a href="${item.link}" target="_blank" class="card-link">
          ${item.link.startsWith('http') ? 'Open Service' : 'Explore'}
        </a>
      </div>
    </div>
  `
}

function updateStats() {
  const total = allItems.value.length
  const filtered = filteredItems.value.length
  const featured = filteredItems.value.filter(item => item.featured).length
  
  const statsText = filtered === total 
    ? `Showing all ${total} items${featured > 0 ? ` (${featured} featured)` : ''}`
    : `Showing ${filtered} of ${total} items${featured > 0 ? ` (${featured} featured)` : ''}`
    
  const statsEl = document.getElementById('stats-display')
  if (statsEl) statsEl.textContent = statsText
}

function setupEventListeners() {
  document.getElementById('catalog-search')?.addEventListener('input', filterItems)
  document.getElementById('category-filter')?.addEventListener('change', filterItems)
  document.getElementById('type-filter')?.addEventListener('change', filterItems)
  document.getElementById('featured-filter')?.addEventListener('change', filterItems)
}
</script>

# Building Visualization Capacity

<div class="catalog-intro">
Discover the comprehensive suite of services and software available for Earth observation data discovery, screening, analysis, and real-world applications. Our cloud-native visualization technologies power every aspect of the EOPF ecosystem.
</div>

<div class="search-container">
  <input id="catalog-search" type="text" placeholder="Search services and software..." class="search-input" />
  <div class="search-icon">🔍</div>
</div>

<div class="filter-container">
  <div class="filter-group">
    <label>Category:</label>
    <select id="category-filter" class="filter-select">
      <option value="">All Categories</option>
      <option value="Discovery">Discovery</option>
      <option value="Screening">Screening</option>
      <option value="Analysis">Analysis</option>
      <option value="Showcases">Showcases</option>
    </select>
  </div>
  <div class="filter-group">
    <label>Type:</label>
    <select id="type-filter" class="filter-select">
      <option value="">All Types</option>
      <option value="service">Service</option>
      <option value="software">Software</option>
      <option value="showcase">Showcase</option>
    </select>
  </div>
  <div class="filter-group">
    <label>
      <input type="checkbox" id="featured-filter" class="filter-checkbox" />
      Featured Only
    </label>
  </div>
</div>

<div class="stats-container">
  <div id="stats-display" class="stats-display">
    Loading catalog...
  </div>
</div>

<div class="services-container">
  <div class="services-grid" id="services-grid"></div>
</div>

<style>
.catalog-intro {
  text-align: center;
  margin: 2rem 0 3rem;
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.search-container {
  position: relative;
  text-align: center;
  margin: 2rem 0;
}

.search-input {
  width: min(600px, 80%);
  padding: 0.8rem 1rem 0.8rem 3rem;
  font-size: 1.1rem;
  border: 2px solid #e0e7ef;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #2a4d7a;
  box-shadow: 0 0 0 3px rgba(42, 77, 122, 0.1);
}

.search-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-300px + 1rem), -50%);
  color: #888;
  font-size: 1.2rem;
}

.filter-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: 500;
  color: #333;
}

.filter-select {
  padding: 0.4rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem;
}

.filter-checkbox {
  transform: scale(1.2);
}

.stats-container {
  text-align: center;
  margin: 1rem 0 2rem;
}

.stats-display {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.service-card {
  border: 1px solid #e0e7ef;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  position: relative;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.service-card.featured {
  border-color: #ffa726;
  background: linear-gradient(135deg, #fff 0%, #fff9e6 100%);
}

.service-card.featured::before {
  content: "⭐ Featured";
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #ffa726;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: bold;
  z-index: 1;
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #f0f0f0;
}

.card-image:not(img) {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.9rem;
  flex-direction: column;
}

.card-content {
  padding: 1.2rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #2a4d7a;
}

.card-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 1rem;
}

.category-tag {
  background: #2a4d7a;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 0.5rem;
}

.tag {
  background: #e0e7ef;
  color: #2a4d7a;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #888;
}

.card-type {
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  text-transform: capitalize;
}

.card-link {
  display: block;
  background: #2a4d7a;
  color: white;
  text-align: center;
  padding: 0.7rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.card-link:hover {
  background: #1f3a5f;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #999;
  font-style: italic;
}

@media (max-width: 768px) {
  .search-icon {
    transform: translate(calc(-40vw + 1rem), -50%);
  }
  
  .filter-container {
    flex-direction: column;
    align-items: center;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .card-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>