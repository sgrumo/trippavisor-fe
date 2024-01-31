import {
  GET_ALL_FESTIVALS,
  GET_ALL_FESTIVALS_FILTERED,
} from "../constants/api/queries";
import { METERS_PER_KILOMETER } from "../constants/generics";
import { performRequest } from "../datocms";
import { FestivalQueryOptions } from "../models/api";
import { IGetAllFestivals } from "../models/cms";
import { getFilterString, getParams } from "../utils/query-builder";

export const getAllFestivals = async () => {
  return performRequest<IGetAllFestivals>({ query: GET_ALL_FESTIVALS });
};

export const searchFestival = async (
  options: FestivalQueryOptions,
  abortController: AbortController,
) => {
  const filterString = getFilterString(options);
  const params = getParams(options);

  const variables: {
    [key: string]: string | number | undefined;
  } = {};

  const query = GET_ALL_FESTIVALS_FILTERED(filterString, params);

  const tags: Map<number, string> | undefined = options.tags
    ? [...options.tags].reduce((acc, curr, index) => {
        acc.set(`tag_${index}`, curr);
        return acc;
      }, new Map())
    : undefined;

  if (options.date) {
    variables.date = options.date;
  }

  if (options.query) {
    variables.query = options.query;
  }

  if (tags) {
    tags.forEach((value, key) => {
      variables[key] = value;
    });
  }

  if (options.radius && options.latitude && options.longitude) {
    variables.latitude = options.latitude;
    variables.longitude = options.longitude;
    variables.radius = options.radius * METERS_PER_KILOMETER;
  }

  return performRequest<IGetAllFestivals>({
    query,
    variables,
    abortController,
  });
};
