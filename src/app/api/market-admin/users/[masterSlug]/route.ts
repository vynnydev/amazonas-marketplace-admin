import { NextResponse } from 'next/server'
import prismadb from '@/infra/http/prisma/prismadb'

export async function GET(
  req: Request,
  { params }: { params: { masterSlug: string } },
) {
  try {
    if (!params.masterSlug) {
      return new NextResponse('Master slug id is required', { status: 400 })
    }

    const userAdmin = await prismadb.user.findUnique({
      where: {
        id: params.masterSlug,
      },
    })

    return NextResponse.json(userAdmin)
  } catch (error) {
    console.log('[USER_ADMIN_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
