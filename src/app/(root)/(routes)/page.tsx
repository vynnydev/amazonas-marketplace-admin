'use client'

import { useEffect } from 'react'
import { useStoreModal } from '@/presentation/hooks/use-store-modal'

// import { StoreModal } from '@/presentation/components/modals/store-modal'

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) onOpen()
  }, [isOpen, onOpen])

  return null
}

export default SetupPage
