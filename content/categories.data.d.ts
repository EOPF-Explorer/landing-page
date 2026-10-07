export interface Category {
  /** Also the /software-services category filter value */
  title: string;
  /** mdi icon class */
  icon: string;
  content: string;
  linkText: string;
}

export declare const data: { categories: Category[] };