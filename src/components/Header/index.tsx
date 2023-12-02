import React from "react";
import styles from "@/src/components/Header/Header.module.scss";
import NavClient from "@/src/components/Header/NavClient";

const Header = () => {
  return (
    <>
      <div className={styles["header-wrapper"]}>
        <div className={styles["nav-text-large"]}>LOGO</div>
        <NavClient />
      </div>
    </>
  );
};

export default Header;
