'use client'

import { logoutAction } from '@/app/actions/authActions'
import { Avatar, Icon } from '@/components/ui'
import { BellIcon, Chevron, Settings, UserIcon } from '@/icons'
import { LogoutIcon } from '@/icons/logout'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import icon from '~root/public/icon.svg'
import { css } from '~root/styled-system/css'
import classes from './app-navbar.styled'

import { type InvitationWorkspace } from '@/types/invitations-workspace'
import { type User } from '@/types/user-types'

interface AppNavbarProps {
  user: User
  pendingInvitations?: InvitationWorkspace[]
}

export function AppNavbar({ user, pendingInvitations }: AppNavbarProps) {
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
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  className={css({
                    pos: 'relative',
                    cursor: 'pointer'
                  })}
                >
                  <Icon icon={BellIcon} color='neutral' />
                  {(pendingInvitations && pendingInvitations.length > 0)
                    ? <span className={classes.bulletNotification} />
                    : null}
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={5} className={classes.dropdownContent} align='end'>
                  {pendingInvitations && pendingInvitations.length > 0
                    ? (
                      pendingInvitations.map((invitation) => (
                        <DropdownMenu.Item key={invitation.id} onSelect={() => ''} className={classes.dropdownItem}>
                          <Link href={`/accept-invitation?token=${invitation.token}`} className={classes.dropdownLink}>
                            <Avatar
                              as='span'
                              src={invitation.workspace.owner.avatarURL}
                              fallback={formatAvatarFallback(invitation.workspace.owner.name, invitation.workspace.owner.lastname)}
                              bgColor='primary.700'
                              size='md'
                              radius='full'
                            />
                            <div>
                              <p className={classes.dropdownTitle}>
                                {invitation.workspace.owner.name} {invitation.workspace.owner.lastname}
                              </p>
                              <p className={classes.dropdownSubtitle}>
                                New invitation to join workspace <strong>{invitation.workspace.name}</strong>
                              </p>
                            </div>
                          </Link>
                        </DropdownMenu.Item>
                      ))
                    )
                    : (
                      <DropdownMenu.Item onSelect={() => ''} className={classes.dropdownItem}>
                        <Icon icon={BellIcon} color='neutral' />
                        No new notifications
                      </DropdownMenu.Item>
                    )}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </li>
        </ul>
        <div className={classes.userAvatar}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className={classes.userButton}>
                <Avatar
                  as='span'
                  src={user?.avatarURL}
                  fallback={
                    user ? formatAvatarFallback(user.name, user.lastname) : 'A'
                  }
                  bgColor='primary.700'
                  size='sm'
                  radius='full'
                />
                {/* <p>{user?.username}</p> */}
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content sideOffset={5} className={classes.dropdownContent} align='end'>
                <DropdownMenu.Group>
                  <DropdownMenu.Item onSelect={() => ''} className={classes.dropdownItem}>
                    <Icon icon={UserIcon} color='neutral' />
                    Profile
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => ''} className={classes.dropdownItem}>
                    <Icon icon={Settings} color='neutral' />
                    Settings
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    onSelect={async () => {
                      await logoutAction()
                    }}
                    className={classes.dropdownItem}
                  >
                    <Icon icon={LogoutIcon} color='neutral' />
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
