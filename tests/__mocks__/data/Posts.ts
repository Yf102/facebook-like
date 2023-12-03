import { Post } from "@/src/services/types/Posts";

const singlePostDataWithImg: Post = {
  id: 1,
  title: "Testing title",
  image: "https://picsum.photos/id/209/854/480",
  content: "Testing content",
};

const singlePostDataWithOutImg: Post = {
  id: 1,
  title: "Testing title without image",
  content: "Testing content without image",
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

export { singlePostDataWithImg, postsData, singlePostDataWithOutImg };
