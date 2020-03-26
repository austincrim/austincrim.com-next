import React from "react";
import Link from "next/link";

export default ({ post }) => (
  <div className="max-w-sm m-8 p-4 bg-blue-200 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
    <Link href={`/p/${post._id}`}>
      <a>
        <h4 className="text-lg font-mono font-bold">{post.title}</h4>
        <div className="text-gray-700">
          {new Date(post.dateAuthored).toLocaleDateString()}
        </div>
      </a>
    </Link>
  </div>
);
