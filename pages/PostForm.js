import React, { useState } from "react";
import Nav from "./components/Nav";

export default () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function eventHandler(setState) {
    return event => setState(event.target.value);
  }

  async function handleClick(event) {
    console.log(event);
    event.preventDefault();
    const response = await fetch(
      "https://austin-crim-blog-api.herokuapp.com/posts",
      { method: "post", body: { title: title, content: content } }
    );
    if (!response.ok) {
      alert("bummer");
    }
  }

  return (
    <>
      <Nav />
      <div class="w-full max-w-lg mx-auto mt-12">
        <form class="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="title"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="content"
            >
              Content
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              type="content"
              placeholder="Content"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
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
