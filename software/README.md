# OpenLayers Examples - Style Guide

## BeerCSS Integration Best Practices

### Preferred EOX Theme Classes

**Buttons**
```css
/* Use BeerCSS button classes */
.button              /* Base button */
.button.border       /* Outlined button */

/* Avoid custom classes */
.btn, .btn-primary   /* Replace with .button */
```

**Layout & Grid**
```css
/* Use BeerCSS grid system */
.grid                /* Container */
.s12 .m6 .l4        /* Responsive columns */

/* Avoid custom grids */
.controls, .examples-grid  /* Replace with .grid */
```

**Colors**
```css
/* Use Material Design variables */
--primary: #003047
--secondary: #00ae9d
--error: #ba1a1a
--background: #fffbff

/* Avoid hardcoded colors */
#f6f8fa, #24292e, #e1e4e8  /* Replace with CSS variables */
```

### Bridge Classes (When Necessary)

**Naming Conventions**
- `.ol-*` for OpenLayers-specific styles
- `.demo-*` for demo-specific functionality

**Justified Extensions**
- Map container dimensions (OpenLayers API requirements)
- Copy/paste functionality (JavaScript integration)
- Interactive controls (Vue.js binding requirements)

### Rollback Exceptions

Document technical reasons when BeerCSS defaults break:
- OpenLayers rendering requirements
- Vue.js reactive binding conflicts
- Code copy/paste functionality dependencies

*Preserve functionality over theme consistency*