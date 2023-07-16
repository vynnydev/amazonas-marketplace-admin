// import { format } from 'date-fns'

// import prismadb from '@/infra/http/prisma/prismadb'

// import { RatingColumn } from './components/columns'
// import { RatingClient } from './components/client'

const RatingsPage = async ({ params }: { params: { storeId: string } }) => {
  // const orders = await prismadb.order.findMany({
  //   where: {
  //     storeId: params.storeId,
  //   },
  //   include: {
  //     orderItems: {
  //       include: {
  //         product: true,
  //       },
  //     },
  //   },
  //   orderBy: {
  //     createdAt: 'desc',
  //   },
  // })

  // const formattedRatings: RatingColumn[] = orders.map((item) => ({
  //   id: item.id,
  //   customer: item.customer,
  //   email: item.email,
  //   rating: item.rating,
  //   ratingDate: format(item.createdAt, 'MMMM do, yyyy'),
  //   createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  // }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* <RatingClient data={formattedRatings} /> */}
      </div>
    </div>
  )
}

export default RatingsPage
