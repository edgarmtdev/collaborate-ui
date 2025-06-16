import { Board } from '@/components/boards'
import { getWorkspaceByUuid } from '@/services/workspaces'
import { Workspace } from '@/types/workspace-types'
import Image from 'next/image'
import { css } from '~root/styled-system/css'
import { WorkspaceHeader } from './components'

type Props = {
  params: { uuid: string }
}

export default async function WorkspacePage({ params }: Props) {
  const { uuid } = params

  const workspace: Workspace = await getWorkspaceByUuid(uuid)

  return (
    <>
      {workspace?.backgroundUrl &&
        <div className={css({ width: '100vw', minHeight: '100vh', position: 'fixed', top: 0 })}>
          <Image fill alt={workspace?.name} src={workspace.backgroundUrl} objectFit='cover' />
          <div className={css({ width: '100vw', minH: '100vh', backgroundColor: 'black/50', position: 'absolute' })} />
        </div>
      }
      <section className={css({
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        w: '100%',
        height: '100%',
        mt: 62
      })}>
        <WorkspaceHeader workspace={workspace} />
        <div className={css({ height: '100%', display: 'flex', flexDirection: 'column', overflowX: 'auto' })}>
          <ol className={css({ position: 'relative', p: 32, height: '100%', display: 'flex', flexDirection: 'row' })}>
            {workspace.boards.map((board) => (
              <li key={board.uuid} className={css({
                display: 'block',
                alignSelf: 'flex-start',
                height: '100%',
                whiteSpace: 'nowrap',
                paddingX: 10
              })}>
                <Board key={board.id} board={board} />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
