import * as React from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData }) => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <Layout>
            <article
                id='article'
                className='flex flex-col justify-around max-w-4xl px-16 mx-auto my-20 space-y-10 dark:text-gray-100'
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='flex flex-col space-y-4'
                >
                    <h3 className='inline pt-10 text-4xl'>{postData.title}</h3>
                    <span className='text-gray-600 dark:text-gray-200'>
                        {new Date(postData.date).toLocaleDateString()}
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='max-w-4xl'
                >
                    <div
                        className='mt-8 prose text-gray-800 max-w-none dark:text-gray-100'
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </motion.div>
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
