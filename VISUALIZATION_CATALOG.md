# Visualization Capacity Catalog

## Overview

The Visualization Capacity Catalog provides a comprehensive web shop-like interface for discovering and accessing all services and software available through the EOPF explorer ecosystem. The catalog organizes offerings into four main categories that support the complete Earth observation workflow:

## Categories

### 🧭 Discovery
Cloud-native and visualization-enhanced EOPF Sentinel products power data discovery. Begin by exploring data client catalogs through standard clients that reveal Sentinel scenes at a glance.

### 🔬 Screening  
To screen products more closely, you can experiment with band combinations, color formulations, and custom arithmetic expressions to unlock spectral, polarization, or any variable insights.

### 📊 Analysis
Sophisticated analysis workflows can be built from OpenEO clients for prototyping, dynamic web maps with on-the-fly reprojection, and interactive time-series exploration.

### 🌟 Showcases
Compelling showcases demonstrate real-world applications – from flood delineation and burnt area mapping to spectral indices and collaborative workspaces – all powered by cloud-native visualization technologies.

## Features

- **Search Functionality**: Free text search across titles, descriptions, tags, and categories
- **Advanced Filtering**: Filter by category, type (service/software/showcase), and featured status
- **Interactive Cards**: Web shop-style cards with images, descriptions, tags, and direct links
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Featured Items**: Highlighted showcase of key services and tools

## Data Management

The catalog is powered by a JSON configuration file (`services.json`) that can be easily maintained and updated. Each service includes:

- Unique ID and title
- Short description
- Category classification
- Type designation (service/software/showcase)
- Tags for searchability
- Image placeholder or screenshot
- Direct link to the service/software
- Featured status flag

## Access

- **URL**: `/visualization-catalog`
- **Navigation**: Available in the main site navigation
- **Hero Action**: Linked from the homepage hero section

## Technical Implementation

- Built with VitePress markdown and Vue.js components
- Responsive CSS Grid layout
- JavaScript-powered search and filtering
- SVG placeholder images with fallback support
- Modern browser compatibility

## Maintenance

To add new services or update existing ones:

1. Edit `services.json` with new service data
2. Add corresponding image to `public/assets/` directory
3. The catalog will automatically reflect the changes

The catalog supports hot-reloading during development for immediate feedback on changes.