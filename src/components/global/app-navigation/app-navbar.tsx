'use client'

import { Avatar, Icon } from '@/components/ui'
import { Chevron } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import classes from './app-navbar.styled'

import icon from '~root/public/icon.svg'

import { type User } from '@/types/user-types'

export function AppNavbar({ user }: { user: User }) {
  return (
    <header className={classes.headerRoot}>
      <div className={classes.iconSection}>
        <Link href={'/dashboard'}>
          <Image
            src={icon}
            alt='icon'
            height={36}
            loading='eager'
            priority
          />
        </Link>
        <button onClick={() => ''}>
          <span>More</span>
          <Icon icon={Chevron} color='neutral' />
        </button>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.listNav}>
          <li><Link href={'/dashboard'}>Workspaces</Link></li>
          <li><Link href={'/dashboard'}>Help</Link></li>
        </ul>
        <div className={classes.userAvatar}>
          <Avatar
            as='span'
            src={user.avatarURL}
            fallback={user ? formatAvatarFallback(user.name, user.lastname) : 'A'}
            bgColor='cardinal.600'
            size='sm'
            radius='full'
          />
          <p>{user?.username}</p>
        </div>
      </nav>
    </header>
  )
}

function formatAvatarFallback(name: string, lastname?: string) {
  return `${name.split('')[0]}${lastname?.split('')[0]}`
}
