import React, { useState } from "react";
import { toast, ToastContainer } from "react-nextjs-toast";
import marked from 'marked';
import Nav from "../components/Nav";

export default () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();

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
        console.error(response);
        toast.notify("Post Creation Failed :/", {type: "error", duration: 3});
      } else {
        toast.notify("Post Created!", {type: "success", duration: 3});
        setTitle("");
        setContent("");
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <Nav />
      <div className="max-w-2xl m-12 mx-auto">
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
              placeholder="Markdown Supported"
              onChange={event => setContent(marked(event.target.value))}
            />
          </div>
          <div>
            <button
              className="w-full mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={event => handleClick(event)}
            >
              Submit
            </button>
            <button
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setContent(marked(content))}
            >
              Preview
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
