import React, { Suspense, use } from "react";

// import { getPosts } from "../home/serverActions";
import { getPosts } from "../(lib)/actions";
import CreatePost from "./component/CreatePost";
import Streaming from "./component/Streaming";
interface Post {
  id: number;
  title: string;
  body: string;
}

async function Home() {
  const posts = await getPosts();
  console.log("posts", posts);

  return (
    <div>
      <h1>Home Page</h1>
      <CreatePost />
      {(posts as Post[]).map((post) => (
        <ul key={post.id}>
          <li>
            {post.id}-{post.title}
          </li>
        </ul>
      ))}
      -------
      {/* <Streaming /> */}
    </div>
  );
}

export default Home;
