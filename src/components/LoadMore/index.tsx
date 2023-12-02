"use client";
import React, { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import Spinner from "@/src/components/ui/Spinner";

type LoadMoreProps = {
  onLoadMore: () => void;
};
const LoadMore = ({ onLoadMore }: LoadMoreProps) => {
  return (
    <InView onChange={onLoadMore}>
      {({ ref }) => (
        <div ref={ref} className="flex justify-center items-center w-full">
          <Spinner />
        </div>
      )}
    </InView>
  );
};

export default LoadMore;
