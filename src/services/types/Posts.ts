export type PostsApiType = {
  page: number;
  posts: Post[];
} & ErrorWrapperType;

type Post = {
  id: number;
  title: string;
  image: string;
  content: string;
};

export type PostsParamsType = {
  page: number;
};

type ErrorWrapperType = {
  error?: string;
};
