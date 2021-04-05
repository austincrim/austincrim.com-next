import * as React from 'react';
import Link from 'next/link';
import { RightArrow } from './Icons';

const PostPreview = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug}`}>
            <a>
                <article className='relative flex items-center transition-transform transform group hover:-translate-x-2'>
                    <div className='flex flex-col flex-grow p-8 space-y-4 text-base rounded shadow-md bg-off-base'>
                        <div className='flex flex-col justify-between space-y-2 md:space-y-0 md:flex-row'>
                            <h3 className='text-xl font-bold tracking-wider'>
                                {post.title}
                            </h3>
                            <span className='text-muted'>
                                {new Date(post.dateWritten).toLocaleDateString()}
                            </span>
                        </div>
                        <p className='leading-8 text-muted md:max-w-lg'>
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
