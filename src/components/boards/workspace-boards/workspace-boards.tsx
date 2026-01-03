'use client'

import { Board, CreateBoard } from '@/components/boards'
import { useOptimistic } from 'react'
import styles from './workspace-boards.styled'

import { type BoardType } from '@/types/board-types'

interface Props {
  initialBoards: BoardType[]
  workspaceUuid: string
}

export function WorkspaceBoards({ initialBoards, workspaceUuid }: Props) {
  const [optimisticBoards, addOptimisticBoard] = useOptimistic<BoardType[]>(initialBoards)

  function handleOptimisticCreate(board: { uuid: string; name: string; tasks?: any[] } | null) {
    if (!board) {
      addOptimisticBoard((s) => s.filter((b) => !b.uuid?.toString().startsWith('temp-')))
      return
    }
    addOptimisticBoard((s) => [...s, (board as BoardType)])
  }

  return (
    <div className={styles.boardsContainer}>
      <ol className={styles.boardsList}>
        {optimisticBoards.map((board) => (
          <li key={board.uuid} className={styles.boardCard}>
            <Board board={board} workspaceUuid={workspaceUuid} />
          </li>
        ))}
        <li className={styles.boardCard}>
          <CreateBoard workSpaceUuid={workspaceUuid} onOptimisticCreate={handleOptimisticCreate} />
        </li>
      </ol>
    </div>
  )
}
