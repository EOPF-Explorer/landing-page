/** Field shown under each item; a string uses the capitalised field name as label. Several fields share one line, e.g. two links */
export type LlmField = string | { field: string | string[]; label: string };

/** One `llm` frontmatter entry: a list of items rendered as markdown for LLM files only */
export interface LlmSection {
  heading?: string;
  /** Path to a VitePress data loader, relative to the page */
  source: string;
  /** Key holding the item array in the loader result */
  items: string;
  title: string;
  /** Candidate fields for the item link, first non-empty wins; "./x" resolves against prefix; site-absolute links get the VitePress base */
  link?: { field: string | string[]; prefix?: string };
  fields?: LlmField[];
}

export type LlmItem = Record<string, unknown>;
