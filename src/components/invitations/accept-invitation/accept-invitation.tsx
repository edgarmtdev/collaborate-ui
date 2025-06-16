'use client'

import { acceptInvitationAction } from '@/app/actions/invitations'
import { Button } from '@/components/ui'
import { InvitationWorkspace } from '@/types/invitations-workspace'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { css } from '~root/styled-system/css'

export function AcceptInvitationPage({ invitation }: { invitation: InvitationWorkspace }) {
  const searchParams = useSearchParams()
  const [invitationAccepted, setInvitationAccepted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleAcceptInvitation = async () => {
    const token = searchParams.get('token')
    if (token) {
      try {
        const response = await acceptInvitationAction(token)
        if (response.success) {
          setInvitationAccepted(true)
          setTimeout(() => {
            router.push(`/dashboard/w/${invitation.workspace.uuid}`)
          }, 2000) // Redirect to dashboard after 2 seconds
        } else {
          setInvitationAccepted(false)
          setError(response.message || 'Failed to accept invitation')
        }
      } catch (error: any) {
        setInvitationAccepted(false)
        setError(error.message || 'Failed to accept invitation')
      } finally {
        setLoading(false)
      }
    } else {
      setError('No invitation token provided')
      setLoading(false)
    }
  }

  return (
    <div>
      {loading
        ? <h1>Loading...</h1>
        : <section
          className={css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            gap: 16
          })}
        >
          <h1>You have a invitation by <strong>{invitation.workspace.owner.name}</strong> for join at <strong>{invitation.workspace.name}</strong></h1>
          <div className={css({ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center' })}>
            <Button onClick={handleAcceptInvitation}>Accept invitation</Button>
            <Link href='/dashboard'>
              <Button variant='monocrom'>
                Go to Dashboard
              </Button>
            </Link>
          </div>
          {invitationAccepted && <p className={css({ color: 'primary.700', fontWeight: 'bold' })}>Invitation accepted successfully!</p>}
          {error && <p className={css({ color: 'cardinal.700', fontWeight: 'bold' })}>{error}</p>}
        </section>
      }
    </div >
  )
}
