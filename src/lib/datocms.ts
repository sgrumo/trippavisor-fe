import { CMS_BASE_URL } from "./constants/cms";
import { RequestModel } from "./models/api";
import { DatoCMSResponseWrapper } from "./models/cms";


export const performRequest = async<T>({ query, variables = {}, includeDrafts = false }: RequestModel): Promise<T> => {
    const response = await fetch(CMS_BASE_URL, {
        headers: {
            Authorization: `Bearer ${import.meta.env.PUBLIC_DATOCMS_API_TOKEN}`,
            ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
        },
        method: "POST",
        body: JSON.stringify({ query, variables }),
    });

    const { data }: DatoCMSResponseWrapper<T> = await response.json();

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(response)}`);
    }

    return data;
}