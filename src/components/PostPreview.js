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
    <div className="w-auto inline-flex m-8 p-6 bg-blue-200 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
      <Link href={`/p/${post._id}`}>
        <a>
          <h4 className="text-lg font-mono font-bold">{post.title}</h4>
          <div className="text-gray-700">
            {new Date(post.dateAuthored).toLocaleDateString()}
          </div>
        </a>
      </Link>
      <div>
        <button onClick={() => deletePost(post._id)} className="ml-4 mt-12 p-2 text-sm bg-red-400 hover:bg-red-500 rounded font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
};
