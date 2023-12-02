import { IBaseFestival } from "./festival";

export const CMS_BASE_URL = "https://graphql.datocms.com/"

export interface DatoCMSResponseWrapper<T> {
    data: T;
}

export interface IGetAllFestivals {
    allFestivals: IBaseFestival[];
}

export type IGetSingleFestival = {

}

