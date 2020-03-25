import React, { useState } from "react";
import Nav from "./components/Nav";

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
        { method: "post", body: { title: title, content: content } }
      );
      if (!response.ok) {
        alert("bummer");
      } else {
        console.log(`Post created with title: ${title}`);
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
  {
    /* <form>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={eventHandler(setTitle)}
          value={title}
        />
        <br />
        <label>Content</label>
        <textarea
          name="content"
          onChange={eventHandler(setContent)}
          value={content}
        />
        <br />
        <button onClick={() => handleClick}>Submit</button>
      </form> */
  }
};
