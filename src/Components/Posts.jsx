import React, { useState, useEffect } from "react";  
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/posts`) // GET request
    .then(res => res.json())
    .then(data => {
      // Sort posts newest first
      const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(sortedPosts);
    })
    .catch(err => console.error(err));
}, []);// 
  return (
    <div>
      <h1>All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet...</p>
      ) : (
        posts.map((post) => (    // map through posts
          <div key={post.id} className="post-card border p-4 mb-4 rounded shadow hover:shadow-lg transition-shadow text-white">
            <h2>{post.title}</h2>
            <p className="text-gray-400 text-sm">  
    By <strong>{post.author}</strong> | {post.date} | {post.views} views
  </p>
            <p>{post.content}</p>
            {/* Comment count */}
            <p className="text-gray-400">Comments: {post.comments.length}</p>
            {post.comments.length > 0 && (
      <div className="mt-2 ml-4">
        {post.comments.map((comment, index) => (
          <p key={index} className="text-gray-300">
            <strong>{comment.author}:</strong> {comment.text}
          </p>
        ))}
      </div>
    )}
            

          </div>
        ))
      )}
    </div>
  );
}
