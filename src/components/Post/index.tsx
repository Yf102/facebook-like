import React from "react";
import styles from "./Post.module.scss";
import Image from "next/image";
import { Post } from "@/src/services/types/Posts";

const Post = ({ title, image, content }: Post) => {
  return (
    <div className={styles["post-container"]}>
      <h2>{title}</h2>
      {image && (
        <div className={styles["img-wrapper"]}>
          <Image src={image} alt={title} layout="fill" />
        </div>
      )}
      <div>{content}</div>
    </div>
  );
};

export default Post;
