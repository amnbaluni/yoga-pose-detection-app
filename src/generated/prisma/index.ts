import { PrismaClient } from './client'

export * from './client'
export * from './models'
export * from './enums'

let prisma: PrismaClient

export function getPrisma() {
  if (!prisma) {
    prisma = new PrismaClient()
  }
  return prisma
}