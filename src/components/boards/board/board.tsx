import { Button } from '@/components/ui'
import styles from './styles'

import { type BoardType } from '@/types/board-types'

export function Board({ board }: { board: BoardType }) {
  return (
    <div className={styles.board}>
      <section className={styles.header}>
        <h2 className={styles.title}>{board.name}</h2>
      </section>
      <section className={styles.content}>
        <div>
          <p>Created at: {new Date(board.createdAt).toLocaleDateString()}</p>
        </div>
        {/* <div>
          <Button variant="monocrom">
            Add Task
          </Button>
        </div> */}
      </section>
    </div>
  )
}
