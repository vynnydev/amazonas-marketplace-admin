import { UserMarketAdmin } from '@prisma/client'

export type SafeUserMarketAdmin = Omit<
  UserMarketAdmin,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}
