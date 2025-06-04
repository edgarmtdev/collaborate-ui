import { get, patch, post } from '@/api/fetch'
import { SendInvitationWorkspace } from '@/types/invitations-workspace'

export async function getPendingInvitations() {
  const response = await get('/invitations/get-by-user')
  return response
}

export async function sendInvitation(data: SendInvitationWorkspace) {
  const response = await post('/invitations/send-invitation', data)
  return response
}

export async function acceptInvitation(token: string) {
  const response = await patch(`/invitations/accept-invitation`, { token })
  return response
}