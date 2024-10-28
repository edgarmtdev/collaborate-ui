import { WorkspaceCard } from '@/components/workspaces'
import { getWorkspaces } from '@/services/workspaces'
import { css } from '~root/styled-system/css'

export default async function Dashboard() {
  const workspaces = await getWorkspaces()

  return (
    <section className={css({ px: 96, py: 36 })}>
      <h2 className={css({ fontSize: '3xl', fontWeight: 'bold', color: 'heading' })}>Workspaces</h2>
      <div className={css({ my: 48, color: 'text' })}>All boards</div>
      <div className={css({ display: 'flex', gridTemplateColumns: 5, gap: 16, w: '100%' })}>
        {workspaces?.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </section>
  )
}
