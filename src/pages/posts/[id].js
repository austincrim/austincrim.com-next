import * as React from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData }) => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <Layout>
            <article className='flex flex-col justify-around max-w-4xl px-16 mx-auto my-20 space-y-10 dark:text-gray-100'>
                <div className='flex flex-col space-y-4'>
                    <h3 className='inline text-4xl'>{postData.title}</h3>
                    <span className='text-gray-600 dark:text-gray-200'>
                        {new Date(postData.date).toLocaleDateString()}
                    </span>
                </div>
                <div className='max-w-4xl'>
                    <div
                        className='mt-8 prose text-gray-800 max-w-none dark:text-gray-100'
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </div>
            </article>
        </Layout>
    );
};

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default Post;
