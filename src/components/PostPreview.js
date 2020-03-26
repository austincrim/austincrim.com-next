import React from "react";
import Link from "next/link";

export default ({ post }) => {
  const deletePost = async id => {
    const res = await fetch(
      `https://austin-crim-blog-api.herokuapp.com/posts/${id}`,
      { method: "DELETE" }
    );
    if (!res.ok) {
      console.error(res);
    }
  };

  return (
    <div className="max-w-sm m-8 p-4 bg-blue-200 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
      <Link href={`/p/${post._id}`}>
        <a>
          <h4 className="text-lg font-mono font-bold">{post.title}</h4>
          <div className="text-gray-700">
            {new Date(post.dateAuthored).toLocaleDateString()}
          </div>
        </a>
      </Link>
      <div>
        <button onClick={() => deletePost(post._id)} className="mt-2 text-xl text-red-600">
          X
        </button>
      </div>
    </div>
  );
};
