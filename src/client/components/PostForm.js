import React from "react";

export const PostForm = () => {
    return (
        <div>
            <form action="http://localhost:3000/posts" method="post">
                <label>Title</label>
                <input type="text" name="title"/>
                <br />
                <label>Content</label>
                <textarea name="content"/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
