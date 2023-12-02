"use client";
import "@/src/polyfills/intersectionObserverPolyfill.js";
import React, { useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import Spinner from "@/src/components/ui/Spinner";
import { Post } from "@/src/services/types/Posts";
import { fetchPosts } from "@/src/actions/fetch-posts";
import Posts from "@/src/components/Posts";

const LoadMore = () => {
  const [ref, inView] = useInView();
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const loadMorePosts = async () => {
    setIsLoading(true);
    const newPage = page + 1;
    const data = await fetchPosts(newPage);
    if (data) {
      setPosts((current) => [...current, ...data.posts]);
      setPage(newPage);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Posts posts={posts} />
      <InView
        onChange={(inView) => {
          inView && loadMorePosts();
        }}
        threshold={0}
        fallbackInView={true}
      >
        <div
          ref={ref}
          className="flex justify-center items-center w-full mb-10"
        >
          <Spinner />
        </div>
      </InView>
    </>
  );
};

export default LoadMore;
