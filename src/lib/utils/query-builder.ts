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
  localization,
  query,
  tags,
}: FestivalQueryOptions): string => {
  let params = [];

  if (date) {
    params.push(`$date: Date`);
  }

  if (localization) {
    params.push(`$localization: $localization`);
  }

  if (query) {
    params.push(`$query: String!`);
  }

  Array.from({ length: tags.length }).forEach((_, index) => {
    params.push(`$tag_${index}: String!`);
  });

  const paramString = params.length > 0 ? `${params.join(", ")}` : "";

  return paramString;
};

export const getFilterString = ({
  date,
  localization,
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

  if (localization) {
    filters.push(`{ ${LOCALIZATION_FILTER} },`);
  }

  if (query) {
    filters.push(`{ ${TITLE_FILTER} },`);
  }

  Array.from({ length: tags.length }).forEach((_, index) => {
    filters.push(`{ ${TAGS_FILTER(index)} },`);
  });

  const filterString =
    filters.length > 0
      ? `filter: { ${AND_START} ${filters.join("")} ${AND_END} }`
      : "";

  return filterString;
};
