import React from 'react';
import fetch from 'isomorphic-unfetch';
import Nav from '../../components/Nav';

const Post = (props) => (
  <>
      <Nav />
      <div>
          <div>{props.post.title}</div>
          <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
        </div>
    </>
);

Post.getInitialProps = async (context) => {
    const { id } = context.query;
    const response = await fetch(
        `https://austin-crim-blog-api.herokuapp.com/posts/${id}`,
    );
    const data = await response.json();

    return {
        post: data,
    };
};

export default Post;
