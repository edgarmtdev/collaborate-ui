import { Avatar } from '@/components/ui'
import { validateUser } from '@/services/auth'
import Image from 'next/image'
import Link from 'next/link'
import classes from './app-navbar.styled'

import icon from '~root/public/icon.svg'

export async function AppNavbar() {
  const { user } = await validateUser()

  return (
    <header className={classes.headerRoot}>
      <Link href={'/'}>
        <Image
          src={icon}
          alt='icon'
          height={36}
          loading='eager'
          priority
        />
      </Link>
      <nav className={classes.navigation}>
        <ul className={classes.listNav}>
          <li><Link href={'/dashboard'}>Workspaces</Link></li>
          <li><Link href={'/dashboard'}>Help</Link></li>
          <li className={classes.userAvatar}>
            <Avatar
              as='span'
              fallback={formatAvatarFallback(user.name, user.lastname)}
              bgColor='cardinal.600'
              size='sm'
              radius='full'
            />
            <p>{user.username}</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function formatAvatarFallback(name: string, lastname?: string) {
  return `${name.split('')[0]}${lastname?.split('')[0]}`
}
