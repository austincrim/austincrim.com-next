import Link from 'next/link';

const PostPreview = ({ post }) => {
    const deletePost = async (id) => {
        const res = await fetch(
            `https://austin-crim-blog-api.herokuapp.com/posts/${id}`,
            { method: 'DELETE' }
        );
        if (!res.ok) {
            console.error(res);
        }
    };

    return (
        <div className='w-auto m-8 p-6 bg-gray-100 rounded-lg shadow-md border-b-4 border-teal-300'>
            <Link href={`/p/${post._id}`}>
                <a>
                    <h4 className='text-lg font-mono font-bold'>
                        {post.title}
                    </h4>
                    <div className='text-gray-700'>
                        {new Date(post.dateAuthored).toLocaleDateString()}
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default PostPreview;
