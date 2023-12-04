import {
  GET_ALL_FESTIVALS,
  GET_ALL_FESTIVALS_BY_DATE,
  GET_ALL_FESTIVALS_BY_GEOLOCALIZATION,
  GET_ALL_FESTIVALS_BY_QUERY,
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

export const searchFestival = async (options: FestivalQueryOptions) => {
  const filterString = getFilterString(options);
  const params = getParams(options);

  const query = GET_ALL_FESTIVALS_FILTERED(filterString, params);

  const tags = options.tags.reduce((acc, curr, index) => {
    acc.set(`tag_${index}`, curr);
    return acc;
  }, new Map());

  const variables = { date: options.date, ...Object.fromEntries(tags) };

  return performRequest<IGetAllFestivals>({
    query,
    variables,
  });
};

export const getAllFestivalsByQuery = async (query: string) => {
  return performRequest<IGetAllFestivals>({
    query: GET_ALL_FESTIVALS_BY_QUERY,
    variables: { query },
  });
};

export const getAllFestivalByDate = async (date: string) => {
  return performRequest<IGetAllFestivals>({
    query: GET_ALL_FESTIVALS_BY_DATE,
    variables: { date },
  });
};

export const getAllFestivalsByGeolocalization = async (
  latitude: number,
  longitude: number,
  radiusInKm: number,
) => {
  const radius = radiusInKm * METERS_PER_KILOMETER;
  return performRequest<IGetAllFestivals>({
    query: GET_ALL_FESTIVALS_BY_GEOLOCALIZATION,
    variables: { latitude, longitude, radius },
  });
};
