import { validateUser } from '@/services/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { css } from '~root/styled-system/css'

export default async function Dashboard() {
  const { isLoggedIn, user } = await validateUser()
  if (!isLoggedIn) {
    redirect('/auth/login')
  }
  return (
    <>
      <aside className={css({
        position: 'fixed',
        top: 61,
        left: 0,
        w: 320,
        height: 'calc(100vh - 61px)',
        bg: 'coolGray.25/30',
        borderRight: '1px',
        borderRightStyle: 'solid',
        borderColor: 'coolGray.200',
        p: 8,
        pt: 48
      })}>
        <ul>
          <li>
            <Link href='/dashboard'>Workspaces</Link>
          </li>
        </ul>
      </aside>
    </>
  )
}
