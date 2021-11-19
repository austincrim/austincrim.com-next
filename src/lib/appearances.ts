import prisma from './prisma'

export async function getAppearances() {
  return await prisma.appearance.findMany()
}
