
import React, { useState } from "react";


const initialPosts = [
  {
    id: 1,
    content: "Welcome to the wall! Share your thoughts anonymously.",
    createdAt: new Date().toLocaleString(),
    likes: 2,
    comments: [
      { id: 1, text: "Love this!" },
      { id: 2, text: "Great idea." }
    ]
  }
];

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [postContent, setPostContent] = useState("");
  const [error, setError] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    if (!postContent.trim()) {
      setError("Post cannot be empty");
      return;
    }
    setError("");
    const newPost = {
      id: Date.now(),
      content: postContent,
      createdAt: new Date().toLocaleString(),
      likes: 0,
      comments: []
    };
    setPosts([newPost, ...posts]);
    setPostContent("");
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center py-8 px-2">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 drop-shadow-lg">FreedomWall</h1>
      <form onSubmit={handlePost} className="w-full max-w-xl bg-white rounded shadow-md p-6 mb-8">
        <textarea
          className="w-full border rounded p-3 mb-4 resize-none focus:outline-blue-400"
          rows={3}
          placeholder="What's on your mind? (Post anonymously...)"
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
        />
        {error && <div className="mb-2 text-red-500">{error}</div>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full font-semibold"
        >
          Post
        </button>
      </form>
      <div className="w-full max-w-xl space-y-6">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500">No posts yet. Be the first to post!</div>
        ) : (
          posts.map(post => (
            <div key={post.id} className="bg-white rounded shadow p-5">
              <div className="mb-2 text-gray-700 whitespace-pre-line">{post.content}</div>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>{post.createdAt}</span>
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center space-x-1 text-blue-600 hover:underline"
                >
                  <span>👍</span>
                  <span>{post.likes}</span>
                </button>
              </div>
              {post.comments.length > 0 && (
                <div className="mt-2 border-t pt-2">
                  <div className="font-semibold text-gray-700 mb-1">Comments:</div>
                  {post.comments.map(c => (
                    <div key={c.id} className="text-gray-600 text-sm mb-1">- {c.text}</div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <footer className="text-blue-700 text-sm opacity-80 mt-10">&copy; {new Date().getFullYear()} FreedomWall. All rights reserved.</footer>
    </div>
  );
};

export default Home;
