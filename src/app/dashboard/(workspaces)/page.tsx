import { WorkspaceCard } from '@/components/workspaces'
import { getWorkspaces } from '@/services/workspaces'
import { workspacesPage } from './dashboard.styled'

export default async function Dashboard() {
  const workspaces = await getWorkspaces()

  return (
    <section className={workspacesPage.root}>
      <h2>Workspaces</h2>
      <div className={workspacesPage.separator}>All boards</div>
      <div className={workspacesPage.flexSection}>
        {workspaces?.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </section>
  )
}
