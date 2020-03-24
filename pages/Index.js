import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import PostPreview from "./components/PostPreview";
import '../styles/index.css';

const Index = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch("https://austin-crim-blog-api.herokuapp.com/posts")
      .then(res => res.json())
      .then(res => setPosts(res));
  }, []);

  return (
    <div>
      <Nav />
      <div className="">
        <h3 className="ml-8 text-4xl font-sans">Posts</h3>
        {posts ? posts.map(post => (<PostPreview post={post} />)) : <div className="text-center pt-10 text-2xl text-gray-600">Loading...</div>}
      </div>
    </div>
  );
};

export default Index;