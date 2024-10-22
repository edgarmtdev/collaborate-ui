import { Icon } from '@/components/ui'
import { UserIcon } from '@/icons'
import { validateUser } from '@/services/auth'
import Image from 'next/image'
import Link from 'next/link'
import { css } from '~root/styled-system/css'

import icon from '~root/public/icon.svg'

export async function AppNavbar() {
  const { user } = await validateUser()
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
        <ul className={css({ display: 'flex', gap: 48 })}>
          <li><Link href={'/dashboard'}>Workspaces</Link></li>
          <li><Link href={'/dashboard'}>Help</Link></li>
          <li className={css({ display: 'flex', gap: 8 })}>
            <Icon icon={UserIcon} color='neutral'/>
            <p>{user.name} {user.lastname}</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}
