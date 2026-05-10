import { updateTaskPosition } from "@/services/tasks/tasks.client"
import {
  DragEndEvent,
  DragOverEvent,
  closestCorners
} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { useRef, useState } from "react"

export type KanbanState = {
  columns: Record<string, { id: string; title: string; cardIds: string[] }>
  cards: Record<string, { id: string; title: string; columnId: string }>
  columnOrder: string[]
}

export function useKanbanDnd(initial: KanbanState) {
  const [state, setState] = useState(initial)
  const snapshot = useRef<KanbanState | null>(null)

  function optimisticMove(activeId: string, overId: string) {
    setState((s) => {
      const next = structuredClone(s)
      const activeCard = next.cards[activeId]
      if (!activeCard) return s

      if (next.columns[overId]) {
        const targetColumnId = overId
        if (activeCard.columnId === targetColumnId) return s

        const fromCol = next.columns[activeCard.columnId]
        const toCol = next.columns[targetColumnId]
        if (!fromCol || !toCol) return s

        fromCol.cardIds = fromCol.cardIds.filter((id) => id !== activeId)
        toCol.cardIds.push(activeId)
        activeCard.columnId = targetColumnId
        return next
      }

      const overCard = next.cards[overId]
      if (!overCard) return s

      const fromCol = next.columns[activeCard.columnId]
      const toCol = next.columns[overCard.columnId]
      if (!fromCol || !toCol) return s

      if (activeCard.columnId === overCard.columnId) {
        const activeIndex = fromCol.cardIds.indexOf(activeId)
        const overIndex = fromCol.cardIds.indexOf(overId)
        if (activeIndex === -1 || overIndex === -1 || activeIndex === overIndex) return s

        fromCol.cardIds = arrayMove(fromCol.cardIds, activeIndex, overIndex)
        return next
      }

      fromCol.cardIds = fromCol.cardIds.filter((id) => id !== activeId)
      const insertIndex = toCol.cardIds.indexOf(overId)
      toCol.cardIds.splice(insertIndex, 0, activeId)
      activeCard.columnId = overCard.columnId
      return next
    })
  }

  function rollback() {
    if (snapshot.current) setState(snapshot.current)
  }

  async function commit(activeId: string, toColumnId: string) {
    console.log(activeId, toColumnId);

    try {
      await updateTaskPosition(activeId, toColumnId)
    } catch {
      rollback()
    }
  }

  function onDragStart() {
    snapshot.current = structuredClone(state)
  }

  function onDragOver(e: DragOverEvent) {
    if (!e.over) return

    const activeId = e.active.id as string
    const overId = e.over.id as string
    if (activeId === overId) return

    optimisticMove(activeId, overId)
  }

  function onDragEnd(e: DragEndEvent) {
    if (!e.over) return

    const activeId = e.active.id as string
    const overId = e.over.id as string
    const activeCard = state.cards[activeId]
    if (!activeCard) return

    let targetColumnId: string | null = null
    if (state.columns[overId]) {
      targetColumnId = overId
    } else if (state.cards[overId]) {
      targetColumnId = state.cards[overId].columnId
    }

    if (!targetColumnId) return
    commit(activeId, targetColumnId)
  }

  return { state, onDragStart, onDragOver, onDragEnd, collisionDetection: closestCorners }
}