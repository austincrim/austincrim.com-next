import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import PostPreview from '../components/PostPreview';

const Blog = ({ posts }) => {
    const sortPosts = (array) => {
        array.sort((a, b) => {
            if (a.dateAuthored > b.dateAuthored) {
                return -1;
            }
            if (a.dateAuthored === b.dateAuthored) {
                return 0;
            }
            return 1;
        });
        return array;
    };

    return (
        <div>
            <Nav />
            <div className='flex-row max-w-4xl mt-24 mx-auto px-6 py-12 bg-gray-200 rounded-lg'>
                <h3 className='ml-8 text-4xl text-teal-600 font-sans'>Posts</h3>
                {posts ? (
                    sortPosts(posts).map((post) => (
                        <PostPreview key={post._id} post={post} />
                    ))
                ) : (
                    <div className='ml-8 text-2xl text-gray-600'>
                        Loading...
                    </div>
                )}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch(
        'https://austin-crim-blog-api.herokuapp.com/posts'
    );
    const posts = await response.json();

    return {
        props: {
            posts,
        },
    };
}

export default Blog;
