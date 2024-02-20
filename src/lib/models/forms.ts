import {
  array,
  boolean,
  date,
  maxValue,
  minValue,
  number,
  object,
  optional,
  string,
  type Input,
} from "valibot";
import { MAX_RADIUS, MIN_RADIUS } from "../constants/generics";

const SearchSchema = object({
  query: optional(string([])),
  latitude: optional(number()),
  longitude: optional(number()),
  range: optional(number([minValue(MIN_RADIUS), maxValue(MAX_RADIUS)])),
  date: optional(date([])),
  tags: object({ array: array(string()), boolean: boolean() }),
});

export type SearchForm = Input<typeof SearchSchema>;
