"use client";

import React, { useActionState, useReducer } from "react";
import { addPosts } from "../../(lib)/actions";

const initialState = {
  title: "",
  body: "",
};

function CreatePost() {
  const [post, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_TITLE":
        return { ...state, title: action.payload };
      case "SET_BODY":
        return { ...state, body: action.payload };
    }
  }, initialState);

  const [state, action, isPending] = useActionState(addPosts, {
    error: null,
    success: false,
  });

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  };

  return (
    <div>
      <h2>CreatePost</h2>
      <form data-testid="create-post-form" style={style} action={action}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={post.title}
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Body"
          name="body"
          value={post.body}
          onChange={(e) =>
            dispatch({ type: "SET_BODY", payload: e.target.value })
          }
        />
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        {state.success && <p style={{ color: "green" }}>Post created!</p>}
        <button type="submit">
          {isPending ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
