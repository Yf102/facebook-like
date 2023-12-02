"use client";
import React from "react";
import { useGetPostsQuery } from "@/src/services/postsApi";
import styles from "@/src/styles/Page.module.scss";
import { ApiErrorType } from "@/src/services/types/Error";
import Image from "next/image";
import Post from "@/src/components/Post";

const LobbyClient = () => {
  const { data, error } = useGetPostsQuery({ page: 1 });
  const _error = error as ApiErrorType;

  return (
    <div className={styles["page-container"]}>
      {error && (
        <div className="flex min-w-full justify-center items-center">{`${_error.status} - ${_error.data.data.error}`}</div>
      )}
      {data && (
        <div>
          {data.posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </div>
      )}
    </div>
  );
};

export default LobbyClient;
