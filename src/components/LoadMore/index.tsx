"use client";
import React, { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import Spinner from "@/src/components/ui/Spinner";
import { useLocalStorage } from "@/src/hooks/useLocalStorage";
import { Post } from "@/src/services/types/Posts";
import { useGetPostsQuery } from "@/src/services/postsApi";
import Posts from "@/src/components/Posts";
import useScrollRestoration from "@/src/hooks/useScrollRestoration";

type LoadMoreProps = {
  pageSSR?: number;
  postsSSR?: Post[];
};
const LoadMore = ({ postsSSR = [], pageSSR = 0 }: LoadMoreProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useScrollRestoration();

  const { storedValue: page, setStoredValue: setPage } = useLocalStorage(
    "page",
    pageSSR,
  );

  const { storedValue: posts, setStoredValue: setPosts } = useLocalStorage<
    Post[]
  >("POSTS", postsSSR);

  const { data, isLoading } = useGetPostsQuery(
    { page },
    {
      skip: !inView,
    },
  );

  useEffect(() => {
    if (data) {
      setPosts((current) => [...current, ...data.posts]);
    }
  }, [data, setPosts]);

  const handleLoadMore = () => {
    setPage((current) => current + 1);
  };

  return (
    <>
      <Posts posts={posts} />
      <InView
        onChange={(inView) => {
          if (inView) {
            handleLoadMore();
          }
        }}
      >
        <div
          ref={ref}
          className="flex justify-center items-center w-full mb-10 h-14"
        >
          {isLoading && <Spinner />}
        </div>
      </InView>
    </>
  );
};

export default LoadMore;
