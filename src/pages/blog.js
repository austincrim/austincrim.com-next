import PostPreview from '../components/PostPreview';
import BlogNav from '../components/BlogNav';
import { getSortedPostsData } from '../../lib/posts';

const Blog = ({ allPostsData }) => {
    return (
        <div>
            <BlogNav />
            <div className='flex flex-col max-w-4xl mt-16 mx-auto px-6 py-12 bg-gray-200 md:rounded-lg'>
                <h3 className='ml-8 text-4xl text-teal-600 font-sans'>Posts</h3>
                {allPostsData ? (
                    allPostsData.map((post) => (
                        <PostPreview key={post.id} post={post} />
                    ))
                ) : (
                    <div className='ml-8 text-2xl text-gray-600'>
                        Loading...
                    </div>
                )}
            </div>
        </div>
    );
};

// export async function getStaticProps() {
//     const response = await fetch(
//         'https://austin-crim-blog-api.herokuapp.com/posts'
//     );
//     const posts = await response.json();

//     return {
//         props: {
//             posts,
//         },
//     };
// }
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData
        },
    };
}

export default Blog;
