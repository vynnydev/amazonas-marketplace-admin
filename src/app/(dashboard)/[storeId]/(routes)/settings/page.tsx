import React from 'react'
import prismadb from '@/infra/http/prisma/prismadb'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { SettingsForm } from './components/settings-form'

interface ISettingsPageProps {
  params: {
    userId: string
  }
}

const SettingsPage: React.FC<ISettingsPageProps> = async ({ params }) => {
  const { userId } = auth()

  if (!userId) redirect('/sign-in')

  const store = await prismadb.store.findFirst({
    where: {
      id: params.userId,
    },
  })

  if (!store) redirect('/')

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  )
}

export default SettingsPage
