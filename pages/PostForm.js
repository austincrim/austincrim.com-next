import React, { useState } from "react";
import Nav from "./components/Nav";

import toastr from "toastr";
import "toastr/build/toastr.css";
toastr.options.positionClass = "toast-bottom-left";

export default () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function eventHandler(setState) {
    return event => setState(event.target.value);
  }

  async function handleClick(event) {
    event.preventDefault();

    if (title && content) {
      const response = await fetch(
        "https://austin-crim-blog-api.herokuapp.com/posts",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            content
          })
        }
      );
      if (!response.ok) {
        toastr.error("Post Creation Failed :/");
        console.error(response);
      } else {
        toastr.success("Post Created!");
        setTitle("");
        setContent("");
      }
    }
  }

  return (
    <>
      <Nav />
      <div className="w-full max-w-2xl mx-auto mt-12">
        <form className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              autoComplete="off"
              onChange={eventHandler(setTitle)}
              value={title}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              rows="10"
              value={content}
              onChange={eventHandler(setContent)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={event => handleClick(event)}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
