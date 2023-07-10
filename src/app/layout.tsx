import React from 'react'
import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/presentation/providers/toast-provider'
import { ModalProvider } from '@/presentation/providers/modal-provider'
import { ThemeProvider } from '@/presentation/providers/theme-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
