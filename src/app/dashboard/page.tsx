import { WorkspaceCard } from '@/components/workspaces'
import { validateUser } from '@/services/auth'
import Link from 'next/link'
import { getWorkspaces } from '@/services/workspaces'
import { redirect } from 'next/navigation'
import { css } from '~root/styled-system/css'

export default async function Dashboard() {
  const { isLoggedIn } = await validateUser()

  if (!isLoggedIn) {
    redirect('/auth/login')
  }

  const workspaces = await getWorkspaces()

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
      <div className={css({ p: 12, display: 'grid', gridTemplateColumns: 5, gap: 16 })}>
        {workspaces?.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </>
  )
}
