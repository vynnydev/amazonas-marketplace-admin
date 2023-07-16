'use client'
import { useState } from 'react'
import axios from 'axios'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'

import { useMarketModal } from '@/presentation/hooks/use-market-modal'
import { Modal } from '@/presentation/components/modals/modal'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/presentation/components/ui/form'
import { Input } from '@/presentation/components/ui/input'
import { Button } from '../ui/button'

const formSchema = z.object({
  masterSlug: z.string().min(1),
})

export const MasterSlugMarketModal = () => {
  const marketModal = useMarketModal()

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      masterSlug: '',
    },
  })

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)

      const response = await axios.get(
        `/api/market-admin/users/${value.masterSlug}`,
      )

      window.location.assign(`/market-admin/${response.data.id}`)
    } catch (error) {
      toast.error('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      title="Insert master slug for create marketplace administrator"
      description="Register new user to manage whole marketplace and stores"
      isOpen={marketModal.isOpen}
      onClose={marketModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="masterSlug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Master slug</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Master slug"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={marketModal.onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}
