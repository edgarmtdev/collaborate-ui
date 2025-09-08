import { InputIcon } from '@/components/ui'
import { WorkspacesCollapsible } from '@/components/workspaces'
import { SearchIcon } from '@/icons'
import { validateUser } from '@/services/auth'
import { getWorkspaces } from '@/services/workspaces'
import { User } from '@/types/user-types'
import { dashboardStyled } from './dashboard.styled'

export default async function Dashboard() {
  const workspaces = await getWorkspaces()
  const { user }: { user: User } = await validateUser()

  return (
    <div className={dashboardStyled.root}>
      <div className={dashboardStyled.header}>
        <h2>Workspaces</h2>
        <div />
        <InputIcon placeholder='Search...' icon={SearchIcon} variant='fill' />
      </div>
      <section className={dashboardStyled.dashboardContent}>
        {/* <WorkspacesCollapsible
          title='My workspaces'
          workspaces={workspaces?.filter((item) => item.owner?.email === user.email) ?? []}
        /> */}
        <WorkspacesCollapsible
          title='All boards'
          workspaces={workspaces ?? []}
        />
      </section>
    </div>
  )
}
