'use client'

import { Button, Input, Toast } from '@/components/ui'
import { sendInvitationAction } from '@/app/actions/invitations'
import { SendInvitationWorkspace } from '@/types/invitations-workspace'
import { Workspace } from '@/types/workspace-types'
import * as Dialog from '@radix-ui/react-dialog'
import { type FormEvent, useState } from 'react'
import { css } from '~root/styled-system/css'
import styles from './styles'

type SendInvitationModalProps = {
  workspace: Workspace
}

export function SendInvitationModal({ workspace }: SendInvitationModalProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [openToast, setOpenToast] = useState(false)

  const handleInviteSubmit = async (e: FormEvent) => {
    setLoading(true)
    e.preventDefault()
    const data: SendInvitationWorkspace = {
      email,
      workspaceUuid: workspace.uuid
    }

    try {
      const invitation = await sendInvitationAction(data)

      if (!invitation.success) {
        setOpenToast(true)
        setSuccess(true)
        setError(invitation.error.message || 'Failed to send invitation')
        return
      }
    } catch (err) {
      setOpenToast(true)
      setError(null)
    } finally {
      setLoading(false)
      setEmail('')
    }
  }

  return (
    <div>
      <Toast
        type={error ? 'error' : 'success'}
        title={error ? 'An error ocurred' : 'Success'}
        description={error || 'The invitation has been sent successfully.'}
        provider={{ swipeDirection: 'right', duration: 1000 }}
        onOpenChange={setOpenToast}
        open={openToast}
      />
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button>
            Add members
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.contentModal}>
            <Dialog.Title className={css({ textStyle: 'header.md' })}>Add members</Dialog.Title>
            <form onSubmit={handleInviteSubmit} className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
              <Input placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} required type='email' />
              <Button type='submit' className='mt-4' loading={loading}>
                Invite
              </Button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
