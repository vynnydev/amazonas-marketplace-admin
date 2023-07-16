import React from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import prismadb from '@/infra/http/prisma/prismadb'
import { authOptions } from '@/app/api/market-admin/auth/[...nextauth]/route'

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { userId: string }
}) {
  const session = await getSession()

  if (!session?.user?.email) redirect('/market-sign-in')

  const currentUser = await prismadb.user.findFirst({
    where: {
      id: params.userId,
    },
  })

  if (!currentUser) redirect('/register-master-admin')

  return <>{children}</>
}
