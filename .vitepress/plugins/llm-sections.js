/**
 * @file Adds data-driven lists (cards, events, services) to the LLM output.
 *
 * vitepress-plugin-llms builds llms.txt, llms-full.txt and the per-page .md files from the raw
 * markdown, so lists that Vue components render from JS data are missing there. A page declares
 * such lists in its `llm` frontmatter; this plugin renders them as markdown inside `<llm-only>`,
 * which vitepress-plugin-llms keeps in the LLM output and removes from the HTML.
 *
 * Usage: keep the list in a VitePress data loader that the page also reads, then add an `llm` entry:
 *
 * ```yaml
 * llm:
 *   - heading: Client libraries        # optional, rendered as "## Client libraries"
 *     source: ../../content/services.data.js  # data loader, relative to the page
 *     items: clientLibraries           # key of the item array in the loader result
 *     title: title                     # item field used as the entry text
 *     link:                            # optional, links the title
 *       field: link                    # item field (string or { href }); a list tries each in order
 *       prefix: /software-services/    # "./x" links resolve against it, default "/"
 *     fields:                          # optional, one "  - Label: value" line each
 *       - content                      # label is the capitalised field name
 *       - field: [link, secondaryLink] # several fields on one line
 *         label: Links
 * ```
 *
 * Output per item: `- [title](link)` (or `- **title**` without a link), then the field lines.
 * Arrays are joined with ", ", `{ text }` objects print their text and `{ text, href }` objects become
 * links; HTML tags are removed and markdown characters escaped. Site-absolute links get the VitePress base.
 * Invalid entries fail the build with the page and entry index. Full contract: `LlmSection` in ./types.d.ts.
 */
import path from "node:path";
import { pathToFileURL } from "node:url";
// Installed with vitepress-plugin-llms, which parses frontmatter with it too
import matter from "@11ty/gray-matter";

/** @typedef {import("./types").LlmSection} LlmSection */
/** @typedef {import("./types").LlmField} LlmField */
/** @typedef {import("./types").LlmItem} LlmItem */

/**
 * @param {unknown} section
 * @param {string} where
 * @returns {asserts section is LlmSection}
 */
function assertSection(section, where) {
  if (!section || typeof section !== "object") throw new Error(`${where} must be an object`);
  if (!("source" in section) || typeof section.source !== "string") throw new Error(`${where} needs a "source" string`);
  if (!("items" in section) || typeof section.items !== "string") throw new Error(`${where} needs an "items" string`);
  if (!("title" in section) || typeof section.title !== "string") throw new Error(`${where} needs a "title" string`);
}

/** Loader results by absolute path, so each loader runs once per build however many pages read it */
/** @type {Map<string, Promise<Record<string, unknown>>>} */
const loaderResults = new Map();

/** @param {string} file */
const loadData = (file) => {
  const cached = loaderResults.get(file);
  if (cached) return cached;
  const result = import(pathToFileURL(file).href).then(({ default: loader }) => {
    if (typeof loader?.load !== "function") throw new Error(`${path.relative(process.cwd(), file)} is not a VitePress data loader`);
    return loader.load();
  });
  loaderResults.set(file, result);
  return result;
};

/**
 * @param {LlmSection} section
 * @param {string} pageDir
 * @param {string} where
 * @returns {Promise<LlmItem[]>}
 */
const loadItems = async ({ source, items }, pageDir, where) => {
  const list = (await loadData(path.resolve(pageDir, source)))[items];
  if (!Array.isArray(list)) throw new Error(`${where}: "${items}" is not an array in ${source}`);
  return list;
};

/** Keeps data text from turning into markdown syntax. @param {string} text */
const escapeMarkdown = (text) => text.replace(/[\\[\]*_`]/g, "\\$&");

/**
 * Site-absolute links get the VitePress base, so they stay inside PR previews.
 * @param {string} href
 * @param {string} prefix
 * @param {string} base
 */
const resolveHref = (href, prefix, base) => {
  const absolute = href.startsWith("./") ? `${prefix}${href.slice(2)}` : href;
  return absolute.startsWith("/") ? `${base.replace(/\/$/, "")}${absolute}` : absolute;
};

/**
 * Plain text, or a markdown link for `{ text, href }` objects such as card links.
 * @param {unknown} value
 * @param {string} base
 * @returns {string}
 */
const toMarkdown = (value, base) => {
  if (Array.isArray(value)) return value.map((entry) => toMarkdown(entry, base)).filter(Boolean).join(", ");
  if (value && typeof value === "object") {
    const text = "text" in value ? toMarkdown(value.text, base) : "";
    return "href" in value && typeof value.href === "string" ? `[${text}](${resolveHref(value.href, "/", base)})` : text;
  }
  return escapeMarkdown(String(value ?? "").replace(/<[^>]+>/g, "").trim());
};

/**
 * @param {LlmItem} item
 * @param {NonNullable<LlmSection["link"]>} link
 * @param {string} base
 */
const resolveLink = (item, { field, prefix = "/" }, base) => {
  const candidates = [field].flat().map((name) => item[name]);
  const raw = candidates.map((value) => (value && typeof value === "object" && "href" in value ? value.href : value)).find(Boolean);
  return typeof raw === "string" ? resolveHref(raw, prefix, base) : null;
};

/** @param {LlmField} field */
const toLabelledField = (field) => {
  if (typeof field !== "string") return field;
  return { field, label: field.charAt(0).toUpperCase() + field.slice(1) };
};

/**
 * @param {LlmItem} item
 * @param {LlmSection} section
 * @param {string} base
 */
const renderItem = (item, section, base) => {
  const title = toMarkdown(item[section.title], base);
  const href = section.link && resolveLink(item, section.link, base);
  const lines = (section.fields ?? [])
    .map(toLabelledField)
    .map(({ field, label }) => [label, toMarkdown([field].flat().map((name) => item[name]), base)])
    .filter(([, text]) => text)
    .map(([label, text]) => `  - ${label}: ${text}`);
  return [href ? `- [${title}](${href})` : `- **${title}**`, ...lines].join("\n");
};

/**
 * @param {unknown} section
 * @param {string} file
 * @param {number} index
 * @param {string} base
 */
const renderSection = async (section, file, index, base) => {
  const where = `${path.relative(process.cwd(), file)}: llm[${index}]`;
  assertSection(section, where);
  const items = await loadItems(section, path.dirname(file), where);
  const list = items.map((item) => renderItem(item, section, base)).join("\n");
  return section.heading ? `## ${section.heading}\n\n${list}` : list;
};

/**
 * Renders the `llm` frontmatter sections of a page as markdown inside `<llm-only>`,
 * so data-driven content (cards, galleries) reaches llms.txt while the page stays unchanged.
 * Must run before vitepress-plugin-llms, which reads the transformed source.
 * @returns {import("vite").Plugin}
 */
export const llmSections = () => {
  let base = "/";
  return {
    name: "eopf:llm-sections",
    enforce: "pre",
    configResolved(config) {
      base = config.base;
    },
    buildStart() {
      loaderResults.clear();
    },
    async transform(code, id) {
      if (!id.endsWith(".md")) return null;
      const { llm } = matter(code).data;
      if (!Array.isArray(llm)) return null;
      const sections = await Promise.all(llm.map((section, index) => renderSection(section, id, index, base)));
      return { code: `${code}\n\n<llm-only>\n\n${sections.join("\n\n")}\n\n</llm-only>\n`, map: null };
    },
  };
};
