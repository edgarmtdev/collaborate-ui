import { AcceptInvitationPage } from '@/components/invitations'
import { getInvitationByToken } from '@/services/invitations'

export default async function Page({
  searchParams
}: { searchParams: { token: string } }) {
  const token = searchParams.token

  if (!token) {
    return <h1>No invitation token provided</h1>
  }

  const invitation = await getInvitationByToken(token)

  if (!invitation) {
    return <h1>Invitation not found</h1>
  }

  return (
    <>
      <AcceptInvitationPage invitation={invitation} />
    </>
  )
}
