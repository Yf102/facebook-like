import styles from "./Post.module.scss";
import Image from "next/image";
import { Post } from "@/src/services/types/Posts";

type PostsProps = { posts: Post[] };
const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      {posts?.map(({ id, title, image, content }) => {
        return <SinglePost key={id} post={{ id, title, image, content }} />;
      })}
    </>
  );
};

export const SinglePost = ({ post }: { post: Post }) => {
  const { id, title, image, content } = post;
  return (
    <div key={id} className={styles["post-container"]}>
      <h2>{title}</h2>
      {image && (
        <div className={styles["img-wrapper"]}>
          <Image src={image} alt={title} fill />
        </div>
      )}
      <div>{content}</div>
    </div>
  );
};
export default Posts;
