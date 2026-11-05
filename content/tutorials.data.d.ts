export interface TutorialCard {
  title: string;
  content: string;
  features: string[];
  /** Site-absolute; the theme adds the base */
  link: { text: string; href: string; target: string };
}

export interface Tutorials {
  titiler: TutorialCard[];
  eoxelements: TutorialCard[];
  ol: TutorialCard[];
  eodash: TutorialCard[];
  jupyter: TutorialCard[];
}

export declare const data: Tutorials;
