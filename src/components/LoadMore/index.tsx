"use client";
import React, { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import Spinner from "@/src/components/ui/Spinner";

type LoadMoreProps = {
  onLoadMore: () => void;
  isLoading: boolean;
};
const LoadMore = ({ onLoadMore, isLoading }: LoadMoreProps) => {
  if (!("IntersectionObserver" in window)) {
    return (
      <div className="flex justify-center items-center w-full mb-10">
        {isLoading && <Spinner />}
        {!isLoading && (
          <button
            onClick={onLoadMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Load More
          </button>
        )}
      </div>
    );
  }

  return (
    <InView onChange={onLoadMore}>
      {({ ref }) => (
        <div
          ref={ref}
          className="flex justify-center items-center w-full mb-10"
        >
          {isLoading && <Spinner />}
        </div>
      )}
    </InView>
  );
};

export default LoadMore;
