import Image from "next/image";
import LobbyClient from "@/app/LobbyClient";
import styles from "@/src/styles/Page.module.scss";
import Header from "@/src/components/Header";
import React from "react";

export const revalidate = 3600;
export default function Home() {
  return (
    <div className={styles["page"]}>
      <Header />
      <LobbyClient />
    </div>
  );
}
