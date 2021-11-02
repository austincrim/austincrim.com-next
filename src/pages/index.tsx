import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { getPosts } from '../lib/posts'
import { getProjects } from '../lib/projects'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import PostPreview from '../components/PostPreview'
import Layout from '../components/Layout'
import type { Post, Project } from '@prisma/client'
import { RightArrow } from '../components/Icons'

export default function Index({
  projects,
  posts
}: {
  projects: Array<Project>
  posts: Array<Post>
}) {
  return (
    <>
      <Head>
        <meta
          key="description"
          name="description"
          content="The portfolio of Austin Crim, a fullstack web developer"
        />
        <meta
          key="og:title"
          property="og:title"
          content="The portfolio of Austin Crim, a web developer"
        />
        <meta key="og:image" name="og:image" content="https://austincrim.com/og/index.png"></meta>
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        ></meta>
        <meta key="og:url" property="og:url" content="https://austincrim.com" />
      </Head>
      <Layout>
        <main>
          <Hero />
          <Section title="Things I Have Built" id="portfolio">
            <ul className="flex flex-col gap-10">
              {projects.map((project) => (
                <li key={project.title}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </Section>
          <Section title="Things I Have Written" id="blog">
            <div className="flex flex-col gap-10">
              <ul className="flex flex-col mt-20 space-y-20">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <PostPreview post={post} />
                  </li>
                ))}
              </ul>
              <Link href="/blog">
                <a className="self-end text-lg font-semibold transition-colors text-primary hover:text-secondary group">
                  <span className="mr-1">Read more</span>
                  <span className="inline-block align-middle transition-transform transform group-hover:translate-x-1">
                    <RightArrow />
                  </span>
                </a>
              </Link>
            </div>
          </Section>
        </main>

        <Footer>
          <div className="flex flex-col items-center gap-4">
            <a
              className="font-medium underline"
              href="mailto:aust.crim@gmail.com"
            >
              Say Hi
            </a>
            <span>Designed and developed by Austin Crim</span>
          </div>
        </Footer>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [posts, projects] = await Promise.all([
    getPosts({ take: 3, orderBy: { hits: 'desc' } }),
    getProjects()
  ])

  return {
    props: {
      projects,
      posts: posts
    },
    revalidate: 1
  }
}
