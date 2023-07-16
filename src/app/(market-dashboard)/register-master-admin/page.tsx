'use client'

import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { Heading } from '@/presentation/components/ui/heading'
import Input from '@/presentation/components/inputs/input'
import AuthButton from '@/presentation/components/ui/auth-button'

const RegisterMasterAdminPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios
      .post('/api/auth/register', data)
      .then(() => {
        toast.success('Registered!')
        window.location.assign(`/find-master-slug`)
      })
      .catch((error) => {
        toast.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="h-full">
      <div className="pt-14">
        <Heading
          title="Welcome to Amazonas Administrator"
          subtitle="Create an account!"
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

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="mt-5 block text-sm font-medium leading-6 text-neutral-500"
            >
              Password
            </label>
            <div className="mt-5 text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <Input
              id="password"
              label="Password"
              type="password"
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
          Already have an account?
          <a
            href="/market-sign-in"
            className="
              text-neutral-500
              cursor-pointer 
              hover:underline
              px-1
            "
          >
            {' '}
            Log in |
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

export default RegisterMasterAdminPage
