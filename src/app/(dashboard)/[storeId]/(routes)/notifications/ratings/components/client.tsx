'use client'
import React from 'react'

import { DataTable } from '@/presentation/components/ui/data-table'
import { Heading } from '@/presentation/components/ui/heading'
import { Separator } from '@/presentation/components/ui/separator'

import { columns, RatingColumn } from './columns'

interface RatingClientProps {
  data: RatingColumn[]
}

export const RatingClient: React.FC<RatingClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Ratings (${data.length})`}
        description="Rating products for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  )
}
