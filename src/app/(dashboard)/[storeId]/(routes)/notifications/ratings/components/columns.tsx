'use client'

import { ColumnDef } from '@tanstack/react-table'

export type RatingColumn = {
  id: string
  customer: string
  email: string
  rating: number
  ratingDate: string
  description: string
  createdAt: string
}

export const columns: ColumnDef<RatingColumn>[] = [
  {
    accessorKey: 'customer',
    header: 'Customer',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
  },
  {
    accessorKey: 'ratingDate',
    header: 'ratingDate',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
]
