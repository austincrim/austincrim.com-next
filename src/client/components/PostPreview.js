import React from "react";
import "../styles/tailwind.css";

export default ({ post }) => (
  <a href="#">
    <div className="max-w-sm mx-auto flex m-6 p-4 text-center bg-blue-200 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
      <div className="font-black mb-3">{post.title}</div>
      <div className="text-gray-700">{new Date(post.dateAuthored).toLocaleDateString()}</div>
    </div>
  </a>
);
