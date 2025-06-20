import { BoardType } from './board-types'

export type Workspace = {
  id: number
  uuid: string
  name: string
  createdAt: Date | string
  ownerId?: string
  backgroundUrl?: string
  boards: BoardType[]
  members: Member[]
  owner: Member
}

export interface Member {
  id: string
  name: string
  lastname: string
  email: string
  username: string
  password: string
  avatarURL: any
}
