import React, { useState } from 'react';  
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ title, content })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Post created:", data);
        navigate("/"); // redirect back to blog home
      })
      .catch((err) => console.error(err));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: "100%", height: "200px" }}
        ></textarea>

        <button type="submit">Publish</button>
      </form>
    </div>
  );
}