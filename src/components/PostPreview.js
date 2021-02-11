import * as React from 'react';
import Router from 'next/router';
import { motion } from 'framer-motion';
import RightArrow from './icons/RightArrow';

const PostPreview = ({ post }) => {
    const [x, setX] = React.useState();
    return (
        <motion.div
            onClick={() => setX(1500)}
            animate={{ translateX: x }}
            transition={{ duration: 0.2 }}
            className='flex items-center group'
            onAnimationComplete={() => Router.push(`/posts/${post.id}#article`)}
        >
            <div className='flex flex-col flex-grow p-8 space-y-4 transition-transform transform rounded shadow-md bg-gray-50 dark:bg-gray-800 dark:text-gray-100 hover:-translate-x-2'>
                <div className='flex flex-col justify-between space-y-2 md:space-y-0 md:flex-row'>
                    <h4 className='text-xl font-bold tracking-wider'>
                        {post.title}
                    </h4>
                    <span className='text-gray-600 dark:text-gray-200'>
                        {new Date(post.date).toLocaleDateString()}
                    </span>
                </div>
                <p className='text-gray-600 dark:text-gray-200 md:max-w-lg'>
                    {post.lede}
                </p>
            </div>
            <span className='transition-opacity opacity-0 group-hover:opacity-100'>
                <RightArrow height={32} width={32} />
            </span>
        </motion.div>
    );
};

export default PostPreview;
