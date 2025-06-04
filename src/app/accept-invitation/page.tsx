'use client'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { acceptInvitationAction } from '../actions/invitations'

export default function AcceptInvitationPage() {
  const searchParams = useSearchParams()
  const [invitationAccepted, setInvitationAccepted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      acceptInvitationAction(token)
        .then((response) => {
          if (response.success) {
            setInvitationAccepted(true)
          } else {
            setInvitationAccepted(false)
            setError(response.message || 'Failed to accept invitation')
          }
        })
        .catch((error) => {
          setInvitationAccepted(false)
          setError(error.message || 'Failed to accept invitation')
        }).finally(() => {
          setLoading(false)
        })
    }
  }, [searchParams])

  return (
    <div>
      {loading
        ? (
          <h1>Loading...</h1>
        )
        : invitationAccepted
          ? (
            <>
              <h1>Invitation Accepted Successfully!</h1>
              <Link href='/dashboard'>
                <Button>
                            Go to Dashboard
                </Button>
              </Link>
            </>
          )
          : (
            <h1>{error}</h1>
          )}
    </div>
  )
}
