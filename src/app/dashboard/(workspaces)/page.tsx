import { InputIcon } from '@/components/ui'
import { WorkspacesCollapsible } from '@/components/workspaces'
import { SearchIcon } from '@/icons'
import { getWorkspaces } from '@/services/workspaces'
import { css } from '~root/styled-system/css'

export default async function Dashboard() {
  const workspaces = await getWorkspaces()

  return (
    <div className={css({
      p: 12,
      w: '100%',
      maxW: 1536,
      mx: 'auto',
      lg: {
        px: 32,
        py: 36
      }
    })}>
      <div className={css({
        display: 'grid',
        gridTemplateRows: 3,
        alignItems: 'center',
        '& h2': {
          fontSize: '3xl',
          fontWeight: 'bold',
          color: 'heading'
        },
        md: {
          gridTemplateColumns: 3
        }
      })}>
        <h2>Workspaces</h2>
        <div />
        <InputIcon placeholder='Search...' icon={SearchIcon} variant='fill' />
      </div>
      <section className={css({
        display: 'grid',
        gap: 32
      })}>
        <WorkspacesCollapsible title='Recently viewed' workspaces={workspaces} />
        <WorkspacesCollapsible title='All boards' workspaces={workspaces} defaultOpen={false} />
      </section>
    </div>
  )
}
