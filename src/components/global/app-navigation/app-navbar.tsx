import { Avatar } from '@/components/ui'
import { validateUser } from '@/services/auth'
import Image from 'next/image'
import Link from 'next/link'
import { css } from '~root/styled-system/css'

import icon from '~root/public/icon.svg'

export async function AppNavbar() {
  const { user } = await validateUser()

  const avatarFallback = `${user.name.split('')[0]}${user.lastname.split('')[0]}`
  return (
    <header className={css({
      px: 16,
      py: 12,
      borderBottomStyle: 'solid',
      borderBottomColor: 'coolGray.200',
      borderBottom: '1px',
      color: 'coolGray.900',
      display: 'flex',
      alignItems: 'center'
    })}>
      <Link href={'/'}>
        <Image
          src={icon}
          alt='icon'
          height={36}
          loading='eager'
          priority
        />
      </Link>
      <nav className={css({
        ml: 'auto',
        fontWeight: 'bold'
      })}>
        <ul className={css({ display: 'flex', gap: 36, alignItems: 'center' })}>
          <li><Link href={'/dashboard'}>Workspaces</Link></li>
          <li><Link href={'/dashboard'}>Help</Link></li>
          <li className={css({ display: 'flex', gap: 8, alignItems: 'center' })}>
            <Avatar
              as='span'
              fallback={avatarFallback}
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
