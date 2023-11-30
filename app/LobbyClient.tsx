"use client";
import React from "react";
import { useGetPostsQuery } from "@/src/services/postsApi";

const LobbyClient = () => {
  const { data, error } = useGetPostsQuery({ page: 1 });
  return <div>{data ? JSON.stringify(data) : JSON.stringify(error)}</div>;
};

export default LobbyClient;
