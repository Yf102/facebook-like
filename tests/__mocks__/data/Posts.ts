import { Post } from "@/src/services/types/Posts";

const singlePostData: Post = {
  id: 1,
  title: "Testing title",
  image: "https://picsum.photos/id/209/854/480",
  content: "Testing content",
};

const postsData: Post[] = [
  {
    id: 2,
    title: "Testing title 1",
    image: "https://picsum.photos/id/208/854/480",
    content: "Testing content 1",
  },
  { id: 3, title: "Testing title 3", content: "Testing content 3" },
];

export { singlePostData, postsData };
