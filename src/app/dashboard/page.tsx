import { WorkspaceCard } from '@/components/workspaces'
import { validateUser } from '@/services/auth'
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
    <div className={css({ p: 12, display: 'grid', gridTemplateColumns: 5, gap: 16 })}>
      {workspaces?.map((workspace) => (
        <WorkspaceCard key={workspace.id} workspace={workspace} />
      ))}
    </div>
  )
}
