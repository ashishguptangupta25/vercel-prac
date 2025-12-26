import { test, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CreatePost from "./CreatePost";

describe("CreatePost", async () => {
  test("form element exists", async () => {
    render(<CreatePost />);

    const list = await screen.getByTestId("create-post-form");
    const title = await screen.findByPlaceholderText("Title");
    const body = await screen.findByPlaceholderText("Body");
    const button = screen.getByRole("button");
    expect(list).toBeDefined();
    expect(title).toBeDefined();
    expect(body).toBeDefined();
    expect(button).toBeDefined();
  });

  test.skip(" user can input title and body", async () => {
    render(<CreatePost />);

    const title = screen.getByPlaceholderText("Title") as HTMLInputElement;
    const body = screen.getByPlaceholderText("Body") as HTMLInputElement;
    expect(title.value).toBe("");
    expect(body.value).toBe("");
    title.value = "Test Title";
    body.value = "Test Body";
    expect(title.value).toBe("Test Title");
    expect(body.value).toBe("Test Body");
  });
});
