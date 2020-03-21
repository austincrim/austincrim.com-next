import React, { useEffect, useState } from "react";
import { PostForm } from './PostForm';
import '../styles/App.css';

const App = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://austin-crim-blog-api.herokuapp.com/posts")
            .then(res => res.json())
            .then(res => setPosts(res))
    }, []);

    return <div id="application">
        <PostForm />
        {posts.map(post => <li key={post.title}><a href="#">{post.title}</a></li>)}
    </div>;
};

export default App;