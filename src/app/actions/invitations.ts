'use server'

import { acceptInvitation, sendInvitation } from '@/services/invitations'
import { SendInvitationWorkspace } from '@/types/invitations-workspace'

export async function sendInvitationAction(data: SendInvitationWorkspace) {
  const response = await sendInvitation(data)
  return JSON.parse(JSON.stringify(response))
}

export async function acceptInvitationAction(token: string) {
  const response = await acceptInvitation(token)
  return JSON.parse(JSON.stringify(response))
}
