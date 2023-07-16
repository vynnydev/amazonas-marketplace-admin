'use client'
import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'

import * as z from 'zod'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { Store } from '@prisma/client'

import { Trash } from 'lucide-react'
import { toast } from 'react-hot-toast'

import { Heading } from '@/presentation/components/ui/heading'
import { Button } from '@/presentation/components/ui/button'
import { Input } from '@/presentation/components/ui/input'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/presentation/components/ui/form'
import { Separator } from '@/presentation/components/ui/separator'

import { AlertModal } from '@/presentation/components/modals/alert-modal'
import { ApiAlert } from '@/presentation/components/ui/api-alert'
import { useOrigin } from '@/presentation/hooks/use-origin'

interface ISettingsFormProps {
  initialData: Store
}

const formSchema = z.object({
  name: z.string().min(2),
})

type SettingsFormValues = z.infer<typeof formSchema>

export const SettingsForm: React.FC<ISettingsFormProps> = ({ initialData }) => {
  const params = useParams()
  const router = useRouter()
  const origin = useOrigin()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  })

  const onSubmit = async (data: SettingsFormValues) => {
    try {
      setLoading(true)
      await axios.patch(`/api/store-admin/stores/${params.storeId}`, data)
      router.refresh()
      toast.success('Store updated.')
    } catch (error: any) {
      toast.error('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/store-admin/stores/${params.storeId}`)
      router.refresh()
      router.push('/')
      toast.success('Store deleted.')
    } catch (error: any) {
      toast.error('Make sure you removed all products and categories first.')
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title="Settings" subtitle="Manage store" />
        <Button
          disabled={loading}
          variant="destructive"
          size="sm"
          onClick={() => setOpen(true)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Store name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            Save changes
          </Button>
        </form>
      </Form>
      <Separator />
      <ApiAlert
        title="NEXT_PUBLIC_API_URL"
        variant="public"
        description={`${origin}/api/store-admin/${params.storeId}`}
      />
    </>
  )
}