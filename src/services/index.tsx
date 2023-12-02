import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { ApiErrorType } from "@/src/services/types/Error";

const basePath = process.env?.API
  ? process.env.API
  : process.env.NEXT_PUBLIC_BASE_PATH;

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  ApiErrorType | FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: basePath + "/api/",
  prepareHeaders(headers) {
    if (process.env.X_API_KEY) {
      headers.set("accept", "application/json");
      headers.set("X-Api-Key", process.env.X_API_KEY);
    }
    return headers;
  },
});

// initialize an empty api service that we'll inject endpoints into later as needed
const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: 900,
  tagTypes: [],
  endpoints: () => ({}),
});

export { api };
