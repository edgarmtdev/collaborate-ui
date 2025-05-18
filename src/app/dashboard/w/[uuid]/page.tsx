import { Board } from '@/components/boards'
import { getWorkspaceByUuid } from '@/services/workspaces'
import { BoardType } from '@/types/board-types'
import { Workspace } from '@/types/workspace-types'
import Image from 'next/image'
import { css } from '~root/styled-system/css'

type Props = {
  params: { uuid: string }
}

export default async function WorkspacePage({ params }: Props) {
  const { uuid } = params

  const workspace: Workspace = await getWorkspaceByUuid(uuid)

  return (
    <div className={css({ mt: 64 })}>
      {workspace?.backgroundUrl &&
        <div className={css({ width: "100%", minHeight: "100vh", position: "absolute", top: 0 })}>
          <Image fill alt={workspace?.name} src={workspace.backgroundUrl} objectFit='cover' objectPosition='center' />
          <div className={css({ width: "100%", minH: "100vh", backgroundColor: "coolGray.900/80", position: "absolute" })} />
        </div>
      }
      <div className={css({ color: "white", position: "relative", backgroundColor: "coolGray.900/80", p: 16, fontSize: "lg", fontWeight: "semibold" })}>
        <h3>{workspace?.name}</h3>
      </div>
      <div className={css({ position: "relative", display: "flex", gap: 32, p: 32 })}>
        {workspace.boards.map((board) => (
          <Board key={board.id} board={board} />
        ))}
      </div>
    </div>
  )
}
