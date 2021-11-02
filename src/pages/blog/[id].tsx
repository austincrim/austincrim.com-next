import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Post as TPost } from '@prisma/client'
import Layout from '../../components/Layout'
import { getAllSlugs, getPostBySlug } from '../../lib/posts'
import styles from './id.module.css'

export default function Post({ post }: { post: TPost }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Layout>
        <div className="grid place-content-center">Loading...</div>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <meta key="og:title" name="og:title" content={post.title}></meta>
        <meta
          key="og:image"
          name="og:image"
          content={`https://austincrim.com/og/${post.slug}.png`}
        ></meta>
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        ></meta>
        <meta key="description" name="description" content={post.title}></meta>
      </Head>
      <Layout>
        <article
          className={`flex flex-col justify-around max-w-4xl pb-16 mx-auto space-y-10 text-base`}
        >
          <div className={`${styles.heading} flex flex-col space-y-4`}>
            <h1 className="inline pt-10 text-4xl text-primary">{post.title}</h1>
            <span className="text-muted">
              {new Date(post.dateWritten).toLocaleDateString()}
            </span>
          </div>
          <div className="max-w-4xl">
            <div
              className={`mt-8 prose prose-theme max-w-none  ${styles.article}`}
              dangerouslySetInnerHTML={{
                __html: post.content
              }}
            />
          </div>
        </article>
      </Layout>
    </>
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
