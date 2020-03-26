import React from "react";
import Nav from "../../components/Nav";
import fetch from "isomorphic-unfetch";

const Post = props => {
  return (
    <>
      <Nav />
      <div className="max-w-xl p-2 my-10 mx-auto border-2 border-blue-800 rounded">
        <div className="text-4xl mb-2 text-center">{props.post.title}</div>
        <div className="text-left py-6 text-gray-800">
            {props.post.content}
        </div>
      </div>
    </>
  );
};

Post.getInitialProps = async context => {
  const { id } = context.query;
  const response = await fetch(
    `https://austin-crim-blog-api.herokuapp.com/posts/${id}`
  );
  const data = await response.json();

  return {
    post: data
  };
};

export default Post;