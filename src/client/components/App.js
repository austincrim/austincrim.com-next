import React, { useEffect, useState } from "react";
import { PostForm } from './PostForm'

const App = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://austin-crim-blog-api.herokuapp.com/posts")
            .then(res => res.json())
            .then(res => setPosts(res))
    }, []);

    return <div>
        {posts.map(post => <li key={post.title}>{post.title}</li>)}
        <PostForm />
    </div>;
};

export default App;