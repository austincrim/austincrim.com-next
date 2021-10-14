import { GetStaticProps } from 'next'
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
            <ul className="flex flex-col mt-20 space-y-20">
              {posts.map((post) => (
                <li key={post.slug}>
                  <PostPreview post={post} />
                </li>
              ))}
            </ul>
          </Section>
        </main>

        <Footer>
          <div className="flex flex-col items-center gap-4">
            <a className="font-medium" href="mailto:aust.crim@gmail.com">
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
