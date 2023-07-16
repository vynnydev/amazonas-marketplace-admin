import React from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import prismadb from '@/infra/http/prisma/prismadb'
import { authOptions } from '@/app/api/market-admin/auth/[...nextauth]/route'
import { toast } from 'react-hot-toast'

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (session?.user?.email) {
    const currentUser = await prismadb.user.findFirst({
      where: {
        email: session.user.email as string,
      },
    })

    if (currentUser) {
      redirect(`/market-admin/${currentUser.id}`)
    } else {
      toast.error('Something went wrong.')
    }
  }

  return (
    <div className="flex items-center justify-center h-full w-full">
      {children}
    </div>
  )
}
