import * as React from 'react'
import Layout from '../../components/Layout'
import { GetStaticPropsContext } from 'next'
import { getAllSlugs, getPostBySlug } from '../../lib/posts'
import { useRouter } from 'next/router'
import { Post as TPost } from '@prisma/client'

export default function Post({ post }: { post: TPost }) {
  const router = useRouter()

  React.useEffect(() => {
    async function hit() {
      fetch('/api/hits', {
        method: 'POST',
        body: JSON.stringify({ slug: post.slug }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    hit()
  }, [])

  if (router.isFallback) {
    return (
      <Layout>
        <div className='grid place-content-center'>Loading...</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <article className='flex flex-col justify-around max-w-4xl pb-16 mx-auto space-y-10 text-base'>
        <div className='flex flex-col space-y-4'>
          <h1 className='inline pt-10 text-4xl text-primary'>{post.title}</h1>
          <span className='text-muted'>
            {new Date(post.dateWritten).toLocaleDateString()}
          </span>
          <span className='text-muted'>{post.hits} hits</span>
        </div>
        <div className='max-w-4xl'>
          <div
            className='mt-8 prose prose-theme max-w-none'
            dangerouslySetInnerHTML={{
              __html: post.content
            }}
          />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs()
  const paths = slugs.map(({ slug }) => ({ params: { id: slug } }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const post = await getPostBySlug(ctx.params.id as string)
  return {
    props: {
      post
    },
    revalidate: 1
  }
}
