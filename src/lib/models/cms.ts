import { IBaseFestival, IFestivalDetail } from "./festival";

export const CMS_BASE_URL = "https://graphql.datocms.com/";

export interface DatoCMSError {
  message: string;
  path: string[];
  extensions: {
    code: string;
    variableName: string;
    typeName: string;
    argumentName: string;
    errorMessage: string;
  };
}
export interface DatoCMSResponseWrapper<T> {
  data: T;
  errors: DatoCMSError[];
}

export interface IGetAllFestivals {
  allFestivals: IBaseFestival[];
}

export type IGetSingleFestival = {
  festival: IFestivalDetail;
};
