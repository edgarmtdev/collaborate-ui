'use client'

import { createTaskAction } from '@/app/actions/tasks'
import { Button, Input } from '@/components/ui'
import { useRouter } from 'next/navigation'
import { type FormEvent, useState, useTransition, useOptimistic } from 'react'
import styles from './styles'

import { type BoardType } from '@/types/board-types'

interface BoardProps {
  board: BoardType
  workspaceUuid: string
}

export function Board({ board, workspaceUuid }: BoardProps) {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [isPending, startTransition] = useTransition()

  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    board.tasks,
    (state, newTask: { uuid: string; title: string }) => [
      ...state,
      newTask
    ]
  )

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const taskTitle = formData.get('taskTitle') as string

    addOptimisticTask({
      uuid: `temp-${Date.now()}`,
      title: taskTitle
    })

    startTransition(async () => {
      try {
        const response = await createTaskAction(formData)
        if ((response as { success?: boolean })?.success) {
          e.currentTarget.reset()
          setShowForm(false)
          router.refresh()
        }
      } catch (error) {
        setShowForm(false)
      }
    })
  }

  return (
    <div className={styles.board}>
      <section className={styles.header}>
        <h2 className={styles.title}>{board.name}</h2>
      </section>
      <section className={styles.content}>
        <div>
          {optimisticTasks.length === 0 && (
            <p className={styles.noTasksMessage}>No tasks yet</p>
          )}
          {optimisticTasks.map((task) => (
            <div
              key={task.uuid}
              className={`${styles.taskItem} ${task.uuid.startsWith('temp-') ? styles.taskItemPending : styles.taskItemConfirmed}`}
            >
              {task.title}
            </div>
          ))}
        </div>
        <div>
          {!showForm
            ? (
              <Button variant={'monocrom'} size={'xs'} onClick={() => setShowForm(true)}>+ Add Task</Button>
            )
            : (
              <div>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                  <Input
                    type='hidden'
                    name='boardUuid'
                    value={board.uuid}
                  />
                  <Input
                    type='hidden'
                    name='workspaceUuid'
                    value={workspaceUuid}
                  />
                  <Input
                    type='text'
                    placeholder='Task title'
                    size='sm'
                    name='taskTitle'
                  />
                  <div className={styles.formButtonsContainer}>
                    <Button type='submit' variant={'primary'} size={'xs'}>
                      {isPending ? 'Loading...' : 'Add Task'}
                    </Button>
                    <Button type='button' size={'xs'} variant={'dangerBorder'} onClick={() => setShowForm(false)}>
                      Close
                    </Button>
                  </div>
                </form>
              </div>
            )}
        </div>
      </section>
    </div>
  )
}
