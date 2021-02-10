import Link from 'next/link';

const PostPreview = ({ post }) => {
    return (
        <div className='flex flex-col p-8 space-y-4 rounded shadow-md bg-gray-50 dark:bg-gray-800 dark:text-gray-100'>
            <div className='flex flex-col justify-between space-y-2 md:space-y-0 md:flex-row'>
                <Link href={`/posts/${post.id}`}>
                    <a>
                        <h4 className='text-xl font-bold tracking-wider transition-colors hover:text-gray-500 dark:hover:text-gray-400'>
                            {post.title}
                        </h4>
                    </a>
                </Link>
                <span className='text-gray-600 dark:text-gray-200'>
                    {new Date(post.date).toLocaleDateString()}
                </span>
            </div>
            <p className='text-gray-600 dark:text-gray-200 md:max-w-lg'>{post.lede}</p>
        </div>
    );
};

export default PostPreview;
