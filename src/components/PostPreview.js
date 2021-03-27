import * as React from 'react';
import Link from 'next/link';
import RightArrow from './icons/RightArrow';

const PostPreview = ({ post }) => {
    return (
        <Link href={`/posts/${post.id}`}>
            <a>
                <article className='relative flex items-center transition-transform transform group hover:-translate-x-2'>
                    <div className='flex flex-col flex-grow p-8 space-y-4 rounded shadow-md bg-gray-50 dark:bg-gray-800 dark:text-gray-100 '>
                        <div className='flex flex-col justify-between space-y-2 md:space-y-0 md:flex-row'>
                            <h3 className='text-xl font-bold tracking-wider'>
                                {post.title}
                            </h3>
                            <span className='text-gray-600 dark:text-gray-200'>
                                {new Date(post.date).toLocaleDateString()}
                            </span>
                        </div>
                        <p className='text-gray-600 dark:text-gray-200 md:max-w-lg'>
                            {post.lede}
                        </p>
                    </div>
                    <span className='absolute transition opacity-0 group-hover:opacity-100 -right-8'>
                        <RightArrow height={32} width={32} />
                    </span>
                </article>
            </a>
        </Link>
    );
};

export default PostPreview;
