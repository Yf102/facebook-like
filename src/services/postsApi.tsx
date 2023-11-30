import { PostsApiType, PostsParamsType } from "@/src/services/types/Posts";
import { api } from "@/src/services/index";

const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostsApiType, PostsParamsType>({
      query: ({ page }) => `/posts/${page}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;

export const { getPosts } = postsApi.endpoints;

//SSR endpoints
export default postsApi;
