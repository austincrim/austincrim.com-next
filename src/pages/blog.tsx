import PostPreview from '../components/PostPreview';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

const Blog = ({ posts }) => {
    return (
        <Layout>
            <div className='flex flex-col max-w-4xl mx-auto my-20 space-y-12 dark:text-gray-50 md:rounded-lg'>
                <h3 className='text-4xl'>Posts</h3>
                {posts.map((post) => (
                    <PostPreview key={post.id} post={post} />
                ))}
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const posts = await getSortedPostsData();

    return {
        props: {
            posts
        },
        revalidate: 1
    };
}

export default Blog;