import {
  AND_END,
  AND_START,
  ENDDATE_FILTER,
  LOCALIZATION_FILTER,
  STARTDATE_FILTER,
  TAGS_FILTER,
  TITLE_FILTER,
} from "../constants/api/filters";
import { FestivalQueryOptions } from "../models/api";

export const getParams = ({
  date,
  range,
  latitude,
  longitude,
  query,
  tags,
}: FestivalQueryOptions): string => {
  let params = [];

  if (date) {
    params.push(`$date: Date`);
  }

  console.log(latitude, longitude, range);

  if (latitude && longitude && range) {
    params.push(
      `$latitude: FloatType!, $longitude: FloatType!, $radius: FloatType!`,
    );
  }

  if (query) {
    params.push(`$query: String!`);
  }

  if (tags) {
    Array.from({ length: tags.length }).forEach((_, index) => {
      params.push(`$tag_${index}: String!`);
    });
  }

  const paramString = params.length > 0 ? `${params.join(", ")}` : "";

  return paramString;
};

export const getFilterString = ({
  date,
  range,
  latitude,
  longitude,
  query,
  tags,
}: FestivalQueryOptions): string => {
  let filters = [];

  if (date) {
    filters.push(`
                {
                    ${STARTDATE_FILTER}
                },
                {
                    ${ENDDATE_FILTER}
                },
        `);
  }

  if (latitude && longitude && range) {
    filters.push(`{ ${LOCALIZATION_FILTER} },`);
  }

  if (query) {
    filters.push(`{ ${TITLE_FILTER} },`);
  }

  if (tags) {
    Array.from({ length: tags.length }).forEach((_, index) => {
      filters.push(`{ ${TAGS_FILTER(index)} },`);
    });
  }

  const filterString =
    filters.length > 0
      ? `filter: { ${AND_START} ${filters.join("")} ${AND_END} }`
      : "";

  return filterString;
};
