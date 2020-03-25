import React from "react";
import Nav from "../../components/Nav";
import fetch from "isomorphic-unfetch";

const Post = props => {
  return (
    <>
      <Nav />
      <div className="max-w-lg my-10 mx-auto text-center">
        <div className="text-4xl">{props.post.title}</div>
        <div className="text-left py-8">
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
