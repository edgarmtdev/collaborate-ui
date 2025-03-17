'use client'

import { Avatar, Icon } from '@/components/ui'
import { Chevron } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import classes from './app-navbar.styled'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import icon from '~root/public/icon.svg'

import { type User } from '@/types/user-types'
import { logoutAction } from '@/app/actions/authActions'

export function AppNavbar({ user }: { user: User }) {
  return (
    <header className={classes.headerRoot}>
      <div className={classes.iconSection}>
        <Link href={'/dashboard'}>
          <Image src={icon} alt='icon' height={36} loading='eager' priority />
        </Link>
        <button>
          <span>More</span>
          <Icon icon={Chevron} color='neutral' />
        </button>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.listNav}>
          <li>
            <Link href={'/dashboard'}>Workspaces</Link>
          </li>
          <li>
            <Link href={'/dashboard'}>Help</Link>
          </li>
        </ul>
        <div className={classes.userAvatar}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className={classes.userButton}>
                <Avatar
                  as='span'
                  src={user.avatarURL}
                  fallback={
                    user ? formatAvatarFallback(user.name, user.lastname) : 'A'
                  }
                  bgColor='cardinal.600'
                  size='sm'
                  radius='full'
                />
                <p>{user?.username}</p>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content sideOffset={5} className={classes.dropdownContent}>
                <DropdownMenu.Group>
                  <DropdownMenu.Item onSelect={() => ''} className={classes.dropdownItem}>Profile</DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => ''} className={classes.dropdownItem}>Settings</DropdownMenu.Item>
                  <DropdownMenu.Item
                    onSelect={async () => {
                      const response = await logoutAction()
                      console.log(response)
                    }}
                    className={classes.dropdownItem}
                  >
                    Sign out
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </nav>
    </header>
  )
}

function formatAvatarFallback(name: string, lastname?: string) {
  return `${name.split('')[0]}${lastname?.split('')[0]}`
}
