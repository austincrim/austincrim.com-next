import { GetStaticProps } from 'next'
import { getAllSlugs, getPostBySlug } from '../../lib/posts'

export default function Og({ title }) {
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] relative mx-auto h-screen gap-36">
      <div className="absolute top-0 w-screen h-[10px] bg-gradient-to-r from-[rgb(30,64,175)] to-[rgb(96,165,250)]"></div>
      <div className="mt-10 text-6xl font-bold text-center">{title}</div>
      <div className="flex items-center gap-10">
        <img
          src="https://pbs.twimg.com/profile_images/1277774477099773954/cNUzQvNX_400x400.jpg"
          className="object-cover w-56 h-56 rounded-full"
        />
        <div className="text-5xl">
          <span>Hi, I'm&nbsp;</span>
          <span className="block tracking-wide text-transparent md:inline theme-gradient bg-clip-text whitespace-nowrap">
            Austin Crim
          </span>
          <div>
            <div className="mt-2 font-light">
              and I wrote something for you.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs()
  const paths = slugs.map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post = await getPostBySlug(params.slug as string)

  return {
    props: {
      title: post.title
    }
  }
}
