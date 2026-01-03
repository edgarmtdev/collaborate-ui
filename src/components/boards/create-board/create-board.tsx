'use client'

import { createNewBoardAction } from '@/app/actions/boards'
import { Button, Input } from '@/components/ui'
import { useClickOutside } from '@/hooks'
import { useRouter } from 'next/navigation'
import { startTransition, useRef, useState } from 'react'
import styles from './create-board.styled'

interface CreateBoardProps {
  workSpaceUuid: string;
  onOptimisticCreate?: (board: { uuid: string; name: string; tasks?: any[] } | null) => void
}

export function CreateBoard({ workSpaceUuid, onOptimisticCreate }: CreateBoardProps) {
  const [showForm, setShowForm] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  useClickOutside(formRef, () => setShowForm(false), { enabled: true, detectEscapeKey: true })
  const router = useRouter()

  async function handleCreateBoard(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault()
    const formEl = formRef.current ?? (e && (e.currentTarget as HTMLFormElement))
    if (!formEl) return

    const fd = new FormData(formEl)
    const boardName = (fd.get('boardName') as string) || ''
    if (!boardName.trim()) return
    setShowForm(false)

    startTransition(async () => {
      try {
        const tempBoard = { uuid: `temp-${Date.now()}`, name: boardName, tasks: [] }
        onOptimisticCreate?.(tempBoard)
        const response = await createNewBoardAction(fd) as { uuid?: string } | undefined
        if (!response?.uuid) {
          onOptimisticCreate?.(null)
          return
        }
        router.refresh()
      } catch (err) {
        onOptimisticCreate?.(null)
      }
    })
  }

  return (
    <div className={styles.createBoardContainer}>
      {!showForm
        ? (
          <button className={styles.addBoardButton} onClick={() => setShowForm(true)}>
            + Add new board
          </button>
        )
        : (
          <form className={styles.formContainer} ref={formRef} onSubmit={handleCreateBoard}>
            <Input name='boardName' placeholder='Enter a board name...' size='sm' />
            <Input type='hidden' name='workSpaceUuid' value={workSpaceUuid} />
            <div className={styles.formButtonsContainer}>
              <Button type='submit' size='xs'>Create</Button>
              <Button onClick={() => setShowForm(false)} size='xs' variant='dangerBorder'>Cancel</Button>
            </div>
          </form>
        )}
    </div>
  )
}
