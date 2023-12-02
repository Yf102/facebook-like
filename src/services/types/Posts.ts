type StatusType<T> = {
  status_code: number;
  status: string;
  data: T;
};

export type PostsApiType = StatusType<Posts>;

export type Posts = {
  page: number;
  posts: Post[];
};

export type Post = {
  id: number;
  title: string;
  image?: string;
  content: string;
};

export type PostsParamsType = {
  page: number;
};
