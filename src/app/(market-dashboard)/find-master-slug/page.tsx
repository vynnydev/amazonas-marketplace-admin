'use client'

import { useEffect } from 'react'
import { useMarketModal } from '@/presentation/hooks/use-market-modal'

const FindMasterSlugSetupPage = () => {
  const onOpen = useMarketModal((state) => state.onOpen)
  const isOpen = useMarketModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) onOpen()
  }, [isOpen, onOpen])

  return null
}

export default FindMasterSlugSetupPage
