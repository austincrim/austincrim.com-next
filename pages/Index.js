import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import PostPreview from "./components/PostPreview";
import "../styles/index.css";

export default () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://austin-crim-blog-api.herokuapp.com/posts")
      .then(res => res.json())
      .then(res => setPosts(res));
  }, []);

  const sortPosts = array => {
    array.sort((a, b) => {
      if (a.dateAuthored > b.dateAuthored) {
        return -1;
      } else if (a.dateAuthored == b.dateAuthored) {
        return 0;
      } else {
        return 1;
      }
    });
    return array;
  };
  
  return (
    <div>
      <Nav />
      <div className="p-8">
        <h3 className="ml-8 text-4xl font-sans">Posts</h3>
        {posts ? (
          sortPosts(posts).map(post => <PostPreview key={post._id} post={post} />)
        ) : (
          <div className="ml-8 text-2xl text-gray-600">Loading...</div>
        )}
      </div>
    </div>
  );
};
