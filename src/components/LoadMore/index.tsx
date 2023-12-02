"use client";
import React, { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import Spinner from "@/src/components/ui/Spinner";

type LoadMoreProps = {
  onLoadMore: () => void;
  isLoading: boolean;
};
const LoadMore = ({ onLoadMore, isLoading }: LoadMoreProps) => {

  return (
    <InView onChange={onLoadMore} threshold={0}>
      {({ ref }) => (
        <div
          ref={ref}
          className="flex justify-center items-center w-full mb-10"
        >
          <Spinner />
        </div>
      )}
    </InView>
  );
};

export default LoadMore;
