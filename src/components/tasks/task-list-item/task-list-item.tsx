import { useDraggable } from '@dnd-kit/core'
import styles from './task-list-item.styled'

import type { TaskType } from '@/types/tasks-types'

interface TaskListItemProps {
  task: TaskType
}

export function TaskListItem({ task }: TaskListItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.uuid
  })
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`${styles.taskItem} ${task.uuid.startsWith('temp-') ? styles.taskItemPending : styles.taskItemConfirmed}`}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        opacity: isDragging ? 0.5 : 1,
        rotate: isDragging ? '4deg' : '0deg',
      }}
    >
      {task.title}
    </div>
  )
}
