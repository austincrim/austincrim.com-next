import PostPreview from '../components/PostPreview';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';

const Blog = ({ allPostsData }) => {
    return (
        <Layout>
            <div className='flex flex-col max-w-4xl mx-auto mt-16 space-y-12 dark:text-gray-50 md:rounded-lg'>
                <h3 className='text-4xl'>Posts</h3>
                {allPostsData.map((post) => (
                    <PostPreview key={post.id} post={post} />
                ))}
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
}

export default Blog;
