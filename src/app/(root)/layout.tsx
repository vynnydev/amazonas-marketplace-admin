import React from 'react'

import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/app/api/market-admin/auth/[...nextauth]/route'

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
