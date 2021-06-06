import prisma from './prisma'

export async function getProjects() {
  return await prisma.project.findMany()
}
