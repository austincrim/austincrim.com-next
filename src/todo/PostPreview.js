import Link from 'next/link';

export default ({ post }) => {
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
        <div className="w-auto inline-flex m-8 p-6 bg-blue-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-100 ease-in">
            <Link href={`/p/${post._id}`}>
                <a>
                    <h4 className="text-lg font-mono font-bold">
                        {post.title}
                    </h4>
                    <div className="text-gray-700">
                        {new Date(post.dateAuthored).toLocaleDateString()}
                    </div>
                </a>
            </Link>
            <div>
                <button
                    href="#"
                    onClick={() => deletePost(post._id)}
                    className="ml-4 mt-12 text-gray-700 text-sm hover:text-red-500"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
