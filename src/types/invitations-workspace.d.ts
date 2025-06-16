import { User } from './user-types'

export interface SendInvitationWorkspace {
  email: string;
  workspaceUuid: string;
}

export interface WorkspaceInvitation {
  owner: User
  id: number
  name: string
  uuid: string
}
export interface InvitationWorkspace {
  id: number
  token: string
  userId: number
  workSpaceId: number
  assignedAt: string
  role: string
  status: string
  workspace: WorkspaceInvitation
}
