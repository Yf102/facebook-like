import styles from "@/src/styles/Page.module.scss";
import Header from "@/src/components/Header";
import React from "react";
import { store } from "@/src/store/store";
import { getPosts } from "@/src/services/postsApi";
import Posts from "@/src/components/Posts";
import dynamic from "next/dynamic";

const DynamicLoadMore = dynamic(() => import("@/src/components/LoadMore/"), {
  ssr: false, // Disable server-side rendering
});

export const revalidate = 3600;

async function getData() {
  const data = await store
    .dispatch(
      getPosts.initiate(
        { page: 1 },
        {
          forceRefetch: process.env.USE_FORCE_REFETCH === "true",
        },
      ),
    )
    .then(({ data, error }) => {
      if (error) throw new Error(JSON.stringify(error));
      return data;
    });

  return { data };
}

export default async function Home() {
  const { data } = await getData();
  return (
    <div className={styles["page"]}>
      <Header />
      <div className={styles["page-container"]} id="scrollable-content">
        <Posts posts={data?.posts || []} />
        <DynamicLoadMore postsSSR={data?.posts} pageSSR={1} />
      </div>
    </div>
  );
}
