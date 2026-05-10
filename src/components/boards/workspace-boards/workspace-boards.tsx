'use client'

import { Board, CreateBoard } from '@/components/boards'
import { useKanbanDnd } from '@/hooks/useKanbanDnd'
import { DndContext } from '@dnd-kit/core'
import { useMemo, useOptimistic } from 'react'
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
    addOptimisticBoard((s) => [...s, board as BoardType])
  }

  const kanbanState = useMemo(() => ({
    columns: Object.fromEntries(
      optimisticBoards.map(board => [
        board.uuid,
        { id: board.uuid, title: board.name, cardIds: board.tasks?.map(task => task.uuid) ?? [] }
      ])
    ),
    cards: Object.fromEntries(
      optimisticBoards.flatMap(board =>
        board.tasks?.map(task => [task.uuid, { id: task.uuid, title: task.title, columnId: board.uuid }]) ?? []
      )
    ),
    columnOrder: optimisticBoards.map(board => board.uuid)
  }), [optimisticBoards])

  const dnd = useKanbanDnd(kanbanState)

  const taskMap = useMemo(
    () => Object.fromEntries(
      optimisticBoards.flatMap((board) => board.tasks?.map((task) => [task.uuid, task]) ?? [])
    ),
    [optimisticBoards]
  )

  const boardsWithTasks = useMemo(
    () => optimisticBoards.map((board) => ({
      ...board,
      tasks: dnd.state.columns[board.uuid]?.cardIds.map((taskId) => taskMap[taskId] ?? { uuid: taskId, title: dnd.state.cards[taskId]?.title ?? '' }) ?? []
    })),
    [dnd.state, optimisticBoards, taskMap]
  )

  return (
    <DndContext {...dnd}>
      <div className={styles.boardsContainer}>
        <ol className={styles.boardsList}>
          {boardsWithTasks.map((board) => (
            <li key={board.uuid} className={styles.boardCard}>
              <Board board={board} workspaceUuid={workspaceUuid} />
            </li>
          ))}
          <li className={styles.boardCard}>
            <CreateBoard workSpaceUuid={workspaceUuid} onOptimisticCreate={handleOptimisticCreate} />
          </li>
        </ol>
      </div>
    </DndContext>
  )
}
