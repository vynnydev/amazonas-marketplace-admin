import React from 'react'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import prismadb from '@/infra/http/prisma/prismadb'

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()
  console.log(userId)

  if (!userId) redirect('/sign-in')

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  })
  console.log(store)

  if (store) redirect(`/store-admin/${store.id}`)

  return <>{children}</>
}
