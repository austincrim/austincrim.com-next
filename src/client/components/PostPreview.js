import React from "react";
import "../styles/tailwind.css";

export default ({ post }) => (
    <div className="max-w-md mx-auto flex-col m-8 p-4 text-center bg-blue-200 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
        <h4 className="text-lg font-mono font-bold">{post.title}</h4>
        <div className="text-gray-700">
            {new Date(post.dateAuthored).toLocaleDateString()}
        </div>
    </div>
);
