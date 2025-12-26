import React from "react";

async function Home({ params }: { params: Promise<{ username?: string }> }) {
  const { username } = await params;
  return <div>sub Home {username}</div>;
}

export default Home;
