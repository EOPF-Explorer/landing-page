export interface ComparisonRow {
  feature: string;
  /** Zarr (EOPF Explorer) */
  explorer: boolean;
  /** Zarr (EOPF Sample Service) */
  sampleService: boolean;
  safe: boolean;
  /** Expanded row details, HTML */
  content: string;
}

export declare const data: { rows: ComparisonRow[] };