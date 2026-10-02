export interface Service {
  id: string;
  title: string;
  content: string;
  image: string;
  /** "./x" is relative to /software-services/ */
  link: string;
  tags: string[];
  category: string;
  type: string;
  order?: number;
  /** Fit the image instead of cropping it */
  contain?: boolean;
  /** Shown on the home page */
  featured?: boolean;
  /** Home page poster image, without text */
  cover?: string;
}

export declare const data: { services: Service[] };
