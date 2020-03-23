import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import PostPreview from "./PostPreview";
import "../styles/App.css";

const App = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://austin-crim-blog-api.herokuapp.com/posts")
            .then(res => res.json())
            .then(res => setPosts(res));
    }, []);

    return (
        <div id="application">
            <Nav />
            <ul>
                {posts.map(post => (
                    <PostPreview post={post} />
                ))}
            </ul>
        </div>
    );
};

export default App;
