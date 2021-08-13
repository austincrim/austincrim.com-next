import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (process.env.NODE_ENV !== 'production') return res.send(200)

  let queries = []
  const { path } = req.query
  if (typeof path === 'string') {
    queries.push(
      prisma.view.create({
        data: {
          path
        }
      })
    )

    if (path.startsWith('/blog/')) {
      queries.push(
        prisma.post.update({
          data: {
            hits: {
              increment: 1
            }
          },
          where: {
            slug: path.split('/').reverse()[0]
          }
        })
      )
    }
  }

  await Promise.all(queries)

  return res.send(200)
}
