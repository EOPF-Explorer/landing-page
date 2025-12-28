#!/usr/bin/env node

// Simple script to create SVG placeholder images for the catalog
import fs from 'fs';
import path from 'path';

const services = [
  { id: 'stack-browser', title: 'Stack Browser', color: '#4CAF50' },
  { id: 'sentinel-explorer', title: 'Sentinels Explorer', color: '#2196F3' },
  { id: 'eopf-catalog', title: 'EOPF Data Catalog', color: '#9C27B0' },
  { id: 'band-combination-tool', title: 'Band Combination Tool', color: '#FF9800' },
  { id: 'spectral-indices', title: 'Spectral Indices Calculator', color: '#4CAF50' },
  { id: 'arithmetic-expressions', title: 'Custom Arithmetic Expressions', color: '#795548' },
  { id: 'polarization-analyzer', title: 'Polarization Analyzer', color: '#607D8B' },
  { id: 'openeo-client', title: 'OpenEO Web Client', color: '#3F51B5' },
  { id: 'dynamic-web-maps', title: 'Dynamic Web Maps', color: '#009688' },
  { id: 'time-series-explorer', title: 'Time Series Explorer', color: '#FF5722' },
  { id: 'jupyter-notebooks', title: 'Jupyter Notebook Environment', color: '#673AB7' },
  { id: 'flood-delineation', title: 'Flood Delineation Showcase', color: '#2196F3' },
  { id: 'burnt-area-mapping', title: 'Burnt Area Mapping', color: '#FF5722' },
  { id: 'agricultural-monitoring', title: 'Agricultural Monitoring', color: '#4CAF50' },
  { id: 'urban-growth-analysis', title: 'Urban Growth Analysis', color: '#9E9E9E' },
  { id: 'collaborative-workspace', title: 'Collaborative Workspace', color: '#E91E63' },
  { id: 'water-quality-monitoring', title: 'Water Quality Monitoring', color: '#00BCD4' }
];

function createPlaceholderSVG(title, color) {
  const initials = title.split(' ').map(word => word[0]).join('').substring(0, 3);
  return `<svg width="300" height="180" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <rect x="10" y="10" width="280" height="160" fill="none" stroke="white" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="150" y="80" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">${initials}</text>
  <text x="150" y="110" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">${title}</text>
  <text x="150" y="140" font-family="Arial, sans-serif" font-size="10" fill="rgba(255,255,255,0.7)" text-anchor="middle">Placeholder Image</text>
</svg>`;
}

// Ensure assets directory exists
const assetsDir = path.join(process.cwd(), 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Generate placeholder SVGs
services.forEach(service => {
  const svg = createPlaceholderSVG(service.title, service.color);
  const filename = `${service.id.replace(/-/g, '-')}.svg`;
  const filepath = path.join(assetsDir, filename);
  
  fs.writeFileSync(filepath, svg);
  console.log(`Generated placeholder: ${filename}`);
});

console.log(`\nGenerated ${services.length} placeholder images in public/assets/`);