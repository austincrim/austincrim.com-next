import Link from 'next/link'
import { RightArrow } from './Icons'
import { Post } from '@prisma/client'

export default function PostPreview({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className='group'>
        <article className='relative flex items-center transition-transform group-hover:-translate-x-2'>
          <div className='flex flex-col flex-grow py-8 space-y-1 text-base rounded sm:px-8 sm:shadow-md sm:bg-off-base'>
            <div className='flex flex-col justify-between space-y-2 md:space-y-0 md:space-x-2 md:flex-row md:items-baseline'>
              <h3 className='text-xl font-bold tracking-wider'>{post.title}</h3>
              <div className='flex flex-col md:items-end md:pl-2'>
                <span className='text-muted'>
                  {new Date(post.dateWritten).toLocaleDateString()}
                </span>
                <span className='text-muted'>{post.hits} hits</span>
              </div>
            </div>
            <p className='max-w-3xl leading-8 text-muted'>{post.lede}</p>
          </div>
          <span className='absolute transition opacity-0 group-hover:opacity-100 -right-8'>
            <RightArrow height={32} width={32} />
          </span>
        </article>
      </a>
    </Link>
  )
}
