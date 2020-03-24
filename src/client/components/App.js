import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import PostPreview from "./PostPreview";
import '../styles/tailwind.css';

const App = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch("https://austin-crim-blog-api.herokuapp.com/posts")
      .then(res => res.json())
      .then(res => setPosts(res));
  }, []);

  return (
    <div id="application">
      <Nav />
      <div>
        {posts ? posts.map(post => (<PostPreview post={post} />)) : <div className="text-center pt-10 text-2xl text-gray-600">Loading...</div>}
      </div>
    </div>
  );
};

export default App;