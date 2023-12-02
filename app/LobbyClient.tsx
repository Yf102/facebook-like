"use client";
import { useEffect, useState } from "react";
import { useGetPostsQuery } from "@/src/services/postsApi";
import styles from "@/src/styles/Page.module.scss";
import { ApiErrorType } from "@/src/services/types/Error";
import LoadMore from "@/src/components/LoadMore";
import Posts from "@/src/components/Posts";
import { Post } from "@/src/services/types/Posts";

const LobbyClient = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const { data, error, isLoading } = useGetPostsQuery({ page });
  const _error = error as ApiErrorType;

  useEffect(() => {
    if (data) {
      setPosts((current) => [...current, ...data.posts]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setPage((current) => current + 1);
  };

  return (
    <div className={styles["page-container"]}>
      {error && (
        <div className="flex min-w-full justify-center items-center">{`${_error.status} - ${_error.data.data.error}`}</div>
      )}
      {posts.length > 0 && (
        <div>
          <Posts posts={posts} />
          <LoadMore onLoadMore={handleLoadMore} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default LobbyClient;
