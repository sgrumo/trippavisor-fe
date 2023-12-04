export interface RequestModel {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
}

export interface Localization {
  latitude: number;
  longitude: number;
  radius: number;
}

export interface FestivalQueryOptions {
  date?: string;
  localization?: Localization;
  query?: string;
  tags: string[];
}
