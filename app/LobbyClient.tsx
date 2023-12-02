"use client";
import React from "react";
import { useGetPostsQuery } from "@/src/services/postsApi";
import styles from "@/src/styles/Page.module.scss";
import { ApiErrorType } from "@/src/services/types/Error";
import Image from "next/image";

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
            return (
              <div key={post.id}>
                <div>{post.title}</div>
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={300}
                  />
                )}
                <div>{post.content}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LobbyClient;
