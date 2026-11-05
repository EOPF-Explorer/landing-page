interface EventLink {
  text: string;
  href: string;
  target: string;
}

export interface WebinarEvent {
  id: number;
  title: string;
  /** Site-absolute; the page adds the base */
  image: string;
  chips: { text: string; class?: string }[];
  metadata: { text: string; icon: string }[];
  content: string;
  link?: EventLink;
  secondaryLink?: EventLink;
}

export declare const data: { events: WebinarEvent[] };
