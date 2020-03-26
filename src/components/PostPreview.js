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
        <button className="p-2 mt-4 mr-4 text-sm bg-white hover:bg-gray-200 rounded font-semibold">
          Update
        </button>
        <button onClick={() => deletePost(post._id)} className="p-2 text-sm bg-red-400 hover:bg-red-500 rounded font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
};
