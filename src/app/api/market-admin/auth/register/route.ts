import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

import prismadb from '@/infra/http/prisma/prismadb'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, password } = body

    const hashedPassword = await bcrypt.hash(password, 12)
    const generatedToken = uuidv4()

    const userMarketAdmin = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        masterSlug: generatedToken,
      },
    })

    return NextResponse.json(userMarketAdmin)
  } catch (error) {
    console.log('[MASTER_MARKETPLACE_USER_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
