import { Gym, Prisma } from '@prisma/client'
import { G } from 'vitest/dist/chunks/reporters.QZ837uWx'

export interface GymsRepository {
  findById(id: string): Promise<Gym | null>
  create(data: Prisma.GymCreateInput): Promise<Gym>
}