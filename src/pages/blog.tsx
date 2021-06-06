import PostPreview from '../components/PostPreview'
import Layout from '../components/Layout'
import { getPosts } from '../lib/posts'

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className='flex flex-col max-w-5xl mx-auto my-20 space-y-12 dark:text-gray-50 md:rounded-lg'>
        <h3 className='text-4xl'>Posts</h3>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts({ orderBy: { dateWritten: 'desc' } })

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}
