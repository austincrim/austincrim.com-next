import * as React from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { GetStaticPropsContext, NextPageContext } from 'next';
import { getAllSlugs, getPostBySlug } from '../../lib/posts';

const Post = ({ post }) => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <Layout>
            <article className='flex flex-col justify-around max-w-4xl pb-16 mx-auto space-y-10 text-base md:px-16'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='flex flex-col space-y-4'
                >
                    <h1 className='inline pt-10 text-4xl'>{post.title}</h1>
                    <span className='text-muted'>
                        {new Date(post.dateWritten).toLocaleDateString()}
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='max-w-4xl'
                >
                    <div
                        className='mt-8 prose prose-theme max-w-none'
                        dangerouslySetInnerHTML={{
                            __html: post.content,
                        }}
                    />
                </motion.div>
            </article>
        </Layout>
    );
};

export async function getStaticPaths() {
    const slugs = await getAllSlugs();
    const paths = slugs.map(({ slug }) => ({ params: { id: slug } }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const post = await getPostBySlug(ctx.params.id as string);
    return {
        props: {
            post,
        },
    };
}

export default Post;
