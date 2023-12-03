import React from "react";
import { render } from "@/tests/test-utils";
import Posts, { SinglePost } from "@/src/components/Posts/index";
import { describe, expect, it } from "@jest/globals";
import {
  postsData,
  singlePostDataWithImg,
  singlePostDataWithOutImg,
} from "@/tests/__mocks__/data/Posts";

describe("Posts", () => {
  it("It renders multiple posts", async () => {
    const { asFragment } = render(<Posts posts={postsData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Render post with image", async () => {
    const { asFragment } = render(<SinglePost post={singlePostDataWithImg} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Render post with out image", async () => {
    const { asFragment } = render(
      <SinglePost post={singlePostDataWithOutImg} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
