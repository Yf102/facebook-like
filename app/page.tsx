import styles from "@/src/styles/Page.module.scss";
import Header from "@/src/components/Header";
import React from "react";
import { fetchPosts } from "@/src/actions/fetch-posts";
import Posts from "@/src/components/Posts";
import LoadMore from "@/src/components/LoadMore";

export const revalidate = 3600;
export default async function Home() {
  const data = await fetchPosts(1);
  return (
    <div className={styles["page"]}>
      <Header />
      <div className={styles["page-container"]}>
        {data && (
          <div>
            <Posts posts={data.posts} />
            <LoadMore />
          </div>
        )}
      </div>
    </div>
  );
}
