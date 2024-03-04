export interface RequestModel {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
  abortController?: AbortController;
  bearer?: string;
}

export interface LocalizationOptions {
  latitude?: number;
  longitude?: number;
  radius: number;
}

export interface FestivalQueryOptions {
  date?: string;
  latitude?: number;
  longitude?: number;
  range?: number;
  query?: string;
  tags?: string[];
}
