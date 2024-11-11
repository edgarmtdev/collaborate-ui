'use client'

import { navbarContext } from '.'
import { useCallback, useState } from 'react'

import { type LayoutProps } from '@/types/common'

export function NavbarContext({ children }: LayoutProps) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(true)

  const toogleOpenDrawer = useCallback(() => setIsOpenDrawer(state => !state), [])

  return (
    <navbarContext.Provider value={{
      asideComponent: {
        isOpenDrawer,
        toogleOpenDrawer
      }
    }}>
      {children}
    </navbarContext.Provider>
  )
}
