import React from "react";
import "../styles/OutputPostPreview.css";

export default ({ post }) => (
  <a href="#">
    <div className="max-w-sm mx-auto flex m-10 p-6 text-center bg-white rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
      <div className="font-black mb-3">{post.title}</div>
      <div className="text-gray-700">{new Date(post.dateAuthored).toLocaleDateString()}</div>
    </div>
  </a>
);
