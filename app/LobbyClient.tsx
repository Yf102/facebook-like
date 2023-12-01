"use client";
import React from "react";
import { useGetPostsQuery } from "@/src/services/postsApi";
import Header from "@/src/components/Header";
import styles from "@/src/styles/Page.module.scss";

const LobbyClient = () => {
  // const { data, error } = useGetPostsQuery({ page: 1 });

  return (
    <div className={styles["page"]}>
      <Header />
      <div className={styles["page-container"]}>
        <div id="modal-root"></div>
        {/*{data ? JSON.stringify(data) : JSON.stringify(error)}*/}
      </div>
    </div>
  );
};

export default LobbyClient;
