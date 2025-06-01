import { post } from "@/api/fetch";
import { SendInvitationWorkspace } from "@/types/invitations-workspace";

export async function sendInvitation(data: SendInvitationWorkspace) {
  const response = await post("/invitations/send-invitation", data)
  return response
}