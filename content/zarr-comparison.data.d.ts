export interface ComparisonRow {
  feature: string;
  zarr: boolean;
  safe: boolean;
  /** Expanded row details, HTML */
  content: string;
}

export declare const data: { rows: ComparisonRow[] };