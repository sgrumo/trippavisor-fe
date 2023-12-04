import { CMS_BASE_URL } from "./constants/api/cms";
import { RequestModel } from "./models/api";
import { DatoCMSResponseWrapper } from "./models/cms";

export const performRequest = async <T>({
  query,
  variables = {},
  includeDrafts = false,
}: RequestModel): Promise<T> => {
  const response = await fetch(CMS_BASE_URL, {
    headers: {
      Authorization: `Bearer ${import.meta.env.PUBLIC_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
    },
    method: "POST",
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors }: DatoCMSResponseWrapper<T> = await response.json();

  if (errors && errors.length > 0) {
    console.error(errors);
    throw new Error(
      `${errors[0].extensions.code}: ${errors[0].message} ${JSON.stringify(
        errors,
      )}`,
    );
  }

  if (!response.ok) {
    console.error(response);
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(response)}`,
    );
  }

  return data;
};
