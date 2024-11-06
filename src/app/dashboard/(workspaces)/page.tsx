import { InputIcon } from '@/components/ui'
import { WorkspaceCard } from '@/components/workspaces'
import { SearchIcon } from '@/icons'
import { getWorkspaces } from '@/services/workspaces'
import { workspacesPage } from './dashboard.styled'

export default async function Dashboard() {
  const workspaces = await getWorkspaces()

  return (
    <section className={workspacesPage.root}>
      <div className={workspacesPage.header}>
        <h2>Workspaces</h2>
        <div />
        <InputIcon placeholder='Search...' icon={SearchIcon} color='fill' />
      </div>
      <div className={workspacesPage.separator}>All boards</div>
      <div className={workspacesPage.flexSection}>
        {workspaces?.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </section>
  )
}
