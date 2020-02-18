import React, { useState } from "react";

export const PostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function eventHandler(setState) {
        return (event) => setState(event.target.value);
    }

    async function handleClick(e) {
        const response = await fetch("https://austin-crim-blog-api.herokuapp.com/posts", {method: "post", body: {title: title, content: content}})
        if (!response.ok) {
            alert("bummer");
        }
    }

    return (
        <div>
            <form action="https://austin-crim-blog-api.herokuapp.com/posts" method="post">
                <label>Title</label>
                <input type="text" name="title" onChange={eventHandler(setTitle)} value={title}/>
                <br />
                <label>Content</label>
                <textarea name="content" onChange={eventHandler(setContent)} value={content}/>
                <br />
                <button onClick={() => handleClick}>Submit</button>
            </form>
        </div>
    );
};
