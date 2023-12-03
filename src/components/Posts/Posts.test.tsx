import React from "react";
import { render } from "@/tests/test-utils";
import Posts from "@/src/components/Posts/index";
import { describe, expect, it } from "@jest/globals";
import { postsData } from "@/tests/__mocks__/data/Posts";

describe("Posts", () => {
  it("It renders multiple posts", async () => {
    const { asFragment } = render(<Posts posts={postsData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
