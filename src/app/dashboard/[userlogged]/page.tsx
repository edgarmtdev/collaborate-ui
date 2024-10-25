import { WorkspaceCard } from '@/components/workspaces'
import { getWorkspaces } from '@/services/workspaces'
import { css } from '~root/styled-system/css'

export default async function Dashboard() {
  const workspaces = await getWorkspaces()

  return (
    <div className={css({ p: 12, display: 'grid', gridTemplateColumns: 5, gap: 16, w: '100%' })}>
      {workspaces?.map((workspace) => (
        <WorkspaceCard key={workspace.id} workspace={workspace} />
      ))}
    </div>
  )
}
