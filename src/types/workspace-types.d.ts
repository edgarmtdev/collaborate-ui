import { BoardType } from './board-types'

export type Workspace = {
  id: number
  uuid: string
  name: string
  createdAt: Date | string
  ownerId?: string
  backgroundUrl?: string
  boards: BoardType[]
}
