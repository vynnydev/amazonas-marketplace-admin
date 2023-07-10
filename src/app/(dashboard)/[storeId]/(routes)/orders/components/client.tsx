'use client'
import React from 'react'

import { DataTable } from '@/presentation/components/ui/data-table'
import { Heading } from '@/presentation/components/ui/heading'
import { Separator } from '@/presentation/components/ui/separator'

import { columns, OrderColumn } from './columns'

interface OrderClientProps {
  data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  )
}
