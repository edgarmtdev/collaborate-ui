import { createContext } from 'react'

type NavbarContextProps = {
  asideComponent: {
    isOpenDrawer: boolean,
    toogleOpenDrawer: () => void
  }
}

export const navbarContext = createContext<NavbarContextProps>(
  {
    asideComponent: {
      isOpenDrawer: false,
      toogleOpenDrawer: function (): void {
        throw new Error('Function not implemented.')
      }
    }
  }
)
