import { MultiselectValue } from "~/lib/models/festival";

export const CMS_BASE_URL = "https://graphql.datocms.com/";

export const TAGS_OPTIONS: MultiselectValue[] = [
  { value: "ingresso libero", label: "ingresso libero" },
  { value: "vegetariano", label: "vegetariano" },
  { value: "senza glutine", label: "senza glutine" },
  { value: "vegano", label: "vegano" },
  { value: "bancomat", label: "bancomat" },
  { value: "satispay", label: "satispay" },
];
