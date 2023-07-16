'use client'
import React from 'react'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/presentation/components/ui/button'
import { DataTable } from '@/presentation/components/ui/data-table'
import { Heading } from '@/presentation/components/ui/heading'
import { Separator } from '@/presentation/components/ui/separator'
import { ApiList } from '@/presentation/components/ui/api-list'

import { columns, SizeColumn } from './columns'

interface SizesClientProps {
  data: SizeColumn[]
}

export const SizesClient: React.FC<SizesClientProps> = ({ data }) => {
  const params = useParams()
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          subtitle="Manage sizes for your products"
        />
        <Button
          onClick={() =>
            router.push(`/store-admin/${params.storeId}/sizes/new`)
          }
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" subtitle="API Calls for Sizes" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  )
}