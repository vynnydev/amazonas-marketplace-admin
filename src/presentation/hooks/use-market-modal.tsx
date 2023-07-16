import { create } from 'zustand'

interface useMarketModalMarket {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useMarketModal = create<useMarketModalMarket>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
