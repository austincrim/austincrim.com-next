import BlogNav from '../../components/BlogNav';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx';
import { useEffect } from 'react';

const Post = (props) => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <BlogNav />
            <div className='mt-16 p-8 max-w-4xl mx-auto text-gray-800 bg-gray-200 rounded-md'>
                <div className='flex justify-between items-center border-b border-indigo-200'>
                    <h3 className='text-3xl text-teal-600 inline'>{props.post.title}</h3>
                    <span className='text-gray-600'>
                        {new Date(props.post.date).toLocaleDateString()}
                    </span>
                </div>
                <div
                    className='mt-8 font-serif text-left post-content'
                    dangerouslySetInnerHTML={{ __html: props.post.content }}
                />
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const response = await fetch(
        'https://austin-crim-blog-api.herokuapp.com/posts'
    );
    const posts = await response.json();

    const paths = posts.map((post) => {
        return {
            params: {
                id: post._id,
            },
        };
    });
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const response = await fetch(
        `https://austin-crim-blog-api.herokuapp.com/posts/${id}`
    );
    const data = await response.json();
    return {
        props: {
            post: data,
        },
    };
}

export default Post;
