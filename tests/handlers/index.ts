import { rest } from "msw";
import { Posts } from "@/tests/__mocks__/data/Posts";

export const handlers = [
  rest.options("http://localhost:3000/api/*", (_req, res, ctx) => {
    return res(ctx.json({}));
  }),
  rest.get("http://localhost:3000/api/posts", (_req, res, ctx) => {
    return res(ctx.json(Posts), ctx.delay(50));
  }),
];
