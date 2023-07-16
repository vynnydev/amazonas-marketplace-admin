'use client'
import React, { useCallback, useState } from 'react'
import { useTheme } from 'next-themes'

import { AiOutlineMenu } from 'react-icons/ai'
import { signOut } from 'next-auth/react'

import { SafeUserMarketAdmin } from '@/domain/entities/user-market-admin'

import MenuItem from './menu-item'
import Avatar from '@/presentation/components/ui/avatar'
import useLoginModal from '@/presentation/hooks/use-login-modal'

interface UserMenuProps {
  currentUserMarketAdmin?: SafeUserMarketAdmin | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUserMarketAdmin }) => {
  const { resolvedTheme } = useTheme()

  const loginModal = useLoginModal()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUserMarketAdmin?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
          absolute 
          rounded-xl 
          shadow-md
          w-[10vw]
          bg-white 
          overflow-hidden 
          right-0 
          top-12 
          text-sm
          "
          style={{
            backgroundColor: resolvedTheme === 'dark' ? '#000000' : '#ffffff',
          }}
        >
          <div className="flex flex-col cursor-pointer">
            {currentUserMarketAdmin ? (
              <>
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
