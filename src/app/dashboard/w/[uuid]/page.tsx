import { Board } from '@/components/boards'
import { validateUser } from '@/services/auth'
import { getWorkspaceByUuid } from '@/services/workspaces'
import { Workspace } from '@/types/workspace-types'
import Image from 'next/image'
import { WorkspaceHeader } from './components'
import styles from './workspace.styled'

type Props = {
  params: { uuid: string }
}

export default async function WorkspacePage({ params }: Props) {
  const { uuid } = params
  const { user } = await validateUser()

  const workspace: Workspace = await getWorkspaceByUuid(uuid)

  return (
    <>
      {workspace?.backgroundUrl &&
        <picture className={styles.backgroundContainer}>
          <Image
            fill
            alt={workspace?.name}
            src={workspace.backgroundUrl}
            className={styles.backgroundImage}
          />
          <div className={styles.backgroundOverlay} />
        </picture>
      }
      <section className={styles.pageContainer}>
        <WorkspaceHeader workspace={workspace} userLogged={user} />
        <div className={styles.boardsContainer}>
          <ol className={styles.boardsList}>
            {workspace.boards.map((board) => (
              <li
                key={board.uuid}
                className={styles.boardCard}
              >
                <Board board={board} workspaceUuid={uuid} />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
