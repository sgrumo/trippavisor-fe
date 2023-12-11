export interface RequestModel {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
}

export interface LocalizationOptions {
  latitude: number;
  longitude: number;
  radius: number;
}

export interface FestivalQueryOptions {
  date?: string;
  localization?: LocalizationOptions;
  query?: string;
  tags?: string[];
}
