import {
  GET_ALL_FESTIVALS,
  GET_ALL_FESTIVALS_BY_DATE,
  GET_ALL_FESTIVALS_BY_QUERY,
} from "../constants/queries";
import { performRequest } from "../datocms";
import { IGetAllFestivals } from "../models/cms";

export const getAllFestivals = async () => {
  return performRequest<IGetAllFestivals>({ query: GET_ALL_FESTIVALS });
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
    variables: { datestring: date },
  });
};
