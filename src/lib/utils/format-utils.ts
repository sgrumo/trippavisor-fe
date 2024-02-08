import { Address } from "../models/festival";

export const formatAddress = (address: Address): string => {
  return `${address.route}, ${address.locality}, ${address.administrative_area_level_2}`;
};
