'use client'
import React from 'react'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { cn } from '@/utils/lib/utils'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const params = useParams()

  const routes = [
    {
      href: `/store-admin/${params.storeId}`,
      label: 'Overview',
      active: pathname === `/store-admin/${params.storeId}`,
    },
    {
      href: `/store-admin/${params.storeId}/billboards`,
      label: 'Billboards',
      active: pathname === `/store-admin/${params.storeId}/billboards`,
    },
    {
      href: `/store-admin/${params.storeId}/categories`,
      label: 'Categories',
      active: pathname === `/store-admin/${params.storeId}/categories`,
    },
    {
      href: `/store-admin/${params.storeId}/sizes`,
      label: 'Sizes',
      active: pathname === `/store-admin/${params.storeId}/sizes`,
    },
    {
      href: `/store-admin/${params.storeId}/colors`,
      label: 'Colors',
      active: pathname === `/store-admin/${params.storeId}/colors`,
    },
    {
      href: `/store-admin/${params.storeId}/products`,
      label: 'Products',
      active: pathname === `/store-admin/${params.storeId}/products`,
    },
    {
      href: `/store-admin/${params.storeId}/orders`,
      label: 'Orders',
      active: pathname === `/store-admin/${params.storeId}/orders`,
    },
    {
      href: `/store-admin/${params.storeId}/notifications`,
      label: 'Notifications',
      active: pathname === `/store-admin/${params.storeId}/notifications`,
    },
    {
      href: `/store-admin/${params.storeId}/settings`,
      label: 'Settings',
      active: pathname === `/store-admin/${params.storeId}/settings`,
    },
  ]

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-black dark:text-white'
              : 'text-muted-foreground',
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
