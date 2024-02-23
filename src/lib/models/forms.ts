import {
  array,
  boolean,
  date,
  maxValue,
  minLength,
  minValue,
  number,
  object,
  optional,
  string,
  type Input,
} from "valibot";
import { MAX_RADIUS, MIN_RADIUS } from "../constants/generics";

const QUERY_MIN_LENGTH = 3;

const LATITUDE_MIN = -90;
const LATITUDE_MAX = 90;

const LONGITUDE_MIN = -180;
const LONGITUDE_MAX = 180;

export const SearchSchema = object({
  query: optional(string([minLength(QUERY_MIN_LENGTH)])),
  latitude: optional(number([minValue(LATITUDE_MIN), maxValue(LATITUDE_MAX)])),
  longitude: optional(
    number([minValue(LONGITUDE_MIN), maxValue(LONGITUDE_MAX)]),
  ),
  range: optional(number([minValue(MIN_RADIUS), maxValue(MAX_RADIUS)])),
  date: optional(date([])),
  tags: object({ array: array(string()), boolean: boolean() }),
});

export type SearchForm = Input<typeof SearchSchema>;
