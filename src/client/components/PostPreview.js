import React from "react";
import '../styles/OutputPostPreview.css';

export default ({post}) => (
    <div className="max-w-lg mx-auto flex m-10 p-6 bg-white rounded-lg shadow-md">
        <li key={post.title}>
            <a href="#">{post.title}</a>
        </li>
    </div>
);
