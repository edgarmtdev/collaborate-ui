'use server'

import { sendInvitation } from '@/services/invitations'
import { SendInvitationWorkspace } from '@/types/invitations-workspace'

export async function sendInvitationAction(data: SendInvitationWorkspace) {
  const response = await sendInvitation(data)
  return JSON.parse(JSON.stringify(response))
}
