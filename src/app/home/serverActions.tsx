"use server";
export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 100 },
  });
  const data = await res.json();
  return data;
};
