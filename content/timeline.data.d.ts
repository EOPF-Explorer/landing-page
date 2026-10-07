export interface TimelineItem {
  date: string;
  status: "completed" | "ongoing" | "planned";
  title: string;
  /** HTML */
  description: string;
  link?: { href: string; text: string };
}

export declare const data: { timelineItems: TimelineItem[] };