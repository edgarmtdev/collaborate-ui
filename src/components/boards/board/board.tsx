'use client'

import { Button, Input } from '@/components/ui'
import { useState } from 'react'
import { css } from '~root/styled-system/css'
import styles from './styles'

import { type BoardType } from '@/types/board-types'
import { createNewBoard } from '@/app/actions/boards'

export function Board({ board }: { board: BoardType }) {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className={styles.board}>
      <section className={styles.header}>
        <h2 className={styles.title}>{board.name}</h2>
      </section>
      <section className={styles.content}>
        <div className={css({ marginBottom: '16px', bgColor: '#C0C0C0', padding: '8px', borderRadius: '8px' })}>
        </div>
        <div>
          {!showForm
            ? (
              <Button variant={'monocrom'} size={'xs'} onClick={() => setShowForm(true)}>+ Add Task</Button>
            )
            : (
              <div>
                <form action={createNewBoard} className={css({ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' })}>
                  <Input
                    type='text'
                    placeholder='Task title'
                    size='sm'
                    name='boardName'
                  />
                  <div className={css({ display: 'flex', flexDirection: 'row', gap: '8px' })}>
                    <Button type='submit' variant={'primary'} size={'xs'}>
                      Add Task
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
