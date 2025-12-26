import { addPosts } from "../(lib)/actions";
import { getPosts } from "./serverActions";
import { expect, test, vi } from "vitest";

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: "Test Post" }]),
  } as Response);
});

test("getPosts fetches posts correctly", async () => {
  const posts = await getPosts();

  expect(fetch).toHaveBeenCalledOnce();
  expect(posts.length).toBeGreaterThan(0);
  expect(posts[0]).toHaveProperty("id");
  expect(posts[0]).toHaveProperty("title");
});

test("addPosts returns error when title or body is missing", async () => {
  const formData = new FormData();
  formData.append("title", "Test Title");
  // body is missing
  const result = await addPosts({}, formData);
  expect(result).toHaveProperty("error");
});
test("getPosts fetches posts correctly with spy", async () => {
  vi.clearAllMocks();
  const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue({
    json: async () => [{ id: 1, title: "ashish" }],
  } as Response);

  await getPosts();
});
