"use server";
import { store } from "@/src/store/store";
import { getPosts } from "@/src/services/postsApi";

export async function fetchPosts(page: number) {
  return await store
    .dispatch(
      getPosts.initiate(
        { page },
        {
          forceRefetch: process.env.USE_FORCE_REFETCH === "true",
        },
      ),
    )
    .then(({ data, error }) => {
      if (error) throw new Error(JSON.stringify(error));
      return data;
    });
}
