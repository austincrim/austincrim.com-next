import remark from 'remark';
import html from 'remark-html';
import remarkPrism from 'remark-prism';
import prisma from './prisma';
import type { Prisma } from '@prisma/client';

type getPostsArgs = Omit<Prisma.PostFindManyArgs, 'select'>;

export async function getPosts(opts?: getPostsArgs) {
  const allPostsData = await prisma.post.findMany({
    select: {
      dateWritten: true,
      slug: true,
      title: true,
      lede: true
    },
    ...opts
  });

  const serializeablePosts = allPostsData.map((post) => ({
    ...post,
    dateWritten: post.dateWritten.toString()
  }));

  return serializeablePosts;
}

export async function getAllSlugs() {
  const slugs = await prisma.post.findMany({
    select: {
      slug: true
    }
  });

  return slugs;
}

export async function getPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({
    where: {
      slug
    }
  });

  const stringDate = new Date(post.dateWritten).toString();
  const renderedContent = (
    await remark().use(remarkPrism).use(html).process(post.content)
  ).toString();

  return {
    ...post,
    dateWritten: stringDate,
    content: renderedContent
  };
}
