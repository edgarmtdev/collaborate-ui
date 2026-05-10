import { CSS } from "@dnd-kit/utilities"
import styles from './task-list-item.styled'
import { useSortable } from '@dnd-kit/sortable'

import type { TaskType } from '@/types/tasks-types'

interface TaskListItemProps {
  task: TaskType
}

export function TaskListItem({ task }: TaskListItemProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
  } = useSortable({ id: task.uuid, })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${styles.taskItem} ${task.uuid.startsWith('temp-') ? styles.taskItemPending : styles.taskItemConfirmed}`}
    >
      {task.title}
    </div>
  )
}
