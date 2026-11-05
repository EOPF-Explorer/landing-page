import { withBase } from "vitepress";

/** @typedef {import("../../content/services.data").Service} Service */

// Icons are added at render time so keyword search only sees the tag text.
/** @type {Record<string, string>} */
const TAG_ICONS = {
  discovery: 'mdi-compass-outline',
  screening: 'mdi-map',
  analysis: 'mdi-chart-box',
  showcase: 'mdi-star',
  documentation: 'mdi-library',
};

/**
 * Absolute card link for a service; "./x" links are relative to /software-services/.
 * @param {string} link
 */
const resolveServiceLink = (link) => {
  if (link.startsWith("http")) {
    return { href: link, target: "_blank" };
  }
  const path = link.startsWith("./") ? `/software-services/${link.slice(2)}` : link;
  return { href: withBase(path), target: "_self" };
};

/** @param {string[]} tags */
const renderTags = (tags) => tags.map(t =>
  `<div class="chip" style="margin: 0 0.25rem 0.25rem 0; padding: 0.2rem 0.4rem; --_size: auto; font-size: small">${TAG_ICONS[t] ? `<i class='mdi ${TAG_ICONS[t]}'></i> ` : ''}${t}</div>`
).join("");

/**
 * The itemfilter re-sorts results by title, so filtered results need this again.
 * @param {{ order?: number }} a
 * @param {{ order?: number }} b
 */
export const byOrder = (a, b) => (a.order ?? 999) - (b.order ?? 999);

/** @param {Service} service */
export const toServiceCard = (service) => ({
  ...service,
  content: `<div class="vertical-margin">${renderTags(service.tags)}</div>${service.content}`,
  icon: {
    html: `<img src="${withBase(service.image)}" style="height: 150px; width: 100%; object-fit:${service.contain ? 'contain' : 'cover'};" />`,
    height: 200,
    width: "100%"
  },
  link: resolveServiceLink(service.link)
});

/** Poster card for the home page. @param {Service} service */
export const toFeaturedCard = (service) => ({
  id: service.id,
  title: service.title,
  content: service.content,
  image: withBase(service.cover ?? service.image),
  chips: [{ text: service.category }],
  link: resolveServiceLink(service.link),
});