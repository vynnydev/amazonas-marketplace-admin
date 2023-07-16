'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { Heading } from '@/presentation/components/ui/heading'
import Input from '@/presentation/components/inputs/input'
import AuthButton from '@/presentation/components/ui/auth-button'

const SignInPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false)

      if (callback?.ok) {
        toast.success('Logged in')
        router.refresh()
      }

      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  return (
    <div className="h-full">
      <div className="pt-20">
        <Heading
          title="Welcome to Amazonas Administrator"
          subtitle="Login to your account"
        />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full">
        <div>
          <label className="block text-sm font-medium leading-6 text-neutral-500">
            Email address
          </label>
          <div className="mt-2">
            <Input
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
        </div>

        <div>
          <label className="mt-5 block text-sm font-medium leading-6 text-neutral-500">
            Name
          </label>
          <div className="mt-2">
            <Input
              id="name"
              label="Name"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
        </div>

        <div
          className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                    mt-8
                  "
        >
          <AuthButton label={'Login'} onClick={handleSubmit(onSubmit)} />
        </div>

        <p className="mt-6 text-center text-sm">
          Wish to join Administrator Marketplace Amazonas group
          <a
            href="/register-master-admin"
            className="
              text-neutral-500
              cursor-pointer 
              hover:underline
              px-1
            "
          >
            {' '}
            Create account |
          </a>
          <a
            href="/"
            className="
              text-neutral-500
              cursor-pointer 
              hover:underline
              px-1
            "
          >
            {' '}
            Back to Home
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignInPage
