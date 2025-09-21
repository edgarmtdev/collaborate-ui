'use client'

import { createWorkspaceAction } from '@/app/actions/workspace'
import { Button, FileSelector, Input } from '@/components/ui'
import * as Dialog from '@radix-ui/react-dialog'
import { ChangeEvent, useState } from 'react'
import styles from './create-workspace-modal.styled'
import { useToastQueue } from '@/context/toast-queue/Provider'

interface CreateWorkspaceModalProps {
  setWorkspacesList: React.Dispatch<React.SetStateAction<any[]>>
}

export function CreateWorkspaceModal({ setWorkspacesList }: CreateWorkspaceModalProps) {
  const { showToast } = useToastQueue()
  const [open, setOpen] = useState(false)
  const [newWorkspace, setNewWorkspace] = useState<{
    name: string
    backgroundImage: File | null
  }>({
    name: '',
    backgroundImage: null
  })
  const [loading, setLoading] = useState(false)

  const handleCreateWorkspace = async () => {
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('name', newWorkspace.name)
      formData.append('backgroundImage', newWorkspace.backgroundImage || '')

      const data = await createWorkspaceAction(formData)
      if (data) {
        showToast('Workspace created successfully', 'success')
        setOpen(false)
        setNewWorkspace({ name: '', backgroundImage: null })
        setWorkspacesList((prev) => [data, ...prev])
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewWorkspace((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <Dialog.Root open={open} onOpenChange={setOpen} modal>
      <Dialog.Trigger asChild>
        <div className={styles.dialogTrigger}>Create new workspace</div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.modalContent} onInteractOutside={(e) => e.preventDefault()}>
          <Dialog.Title className={styles.title}>Create a new workspace</Dialog.Title>
          <div className={styles.formContainer}>
            <label htmlFor='name'>
              Workspace Name:
              <Input
                type='text'
                placeholder='Enter workspace name'
                name='name'
                value={newWorkspace.name}
                onChange={handleInputChange}
              />
            </label>
            <div>
              <label htmlFor='backgroundImage'>
                Workspace Background:
              </label>
              <FileSelector
                name='backgroundImage'
                onChangeFile={(file) => {
                  setNewWorkspace((prev) => ({ ...prev, backgroundImage: file }))
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', marginTop: 40 }}>
              <Button
                variant='primary'
                onClick={handleCreateWorkspace}
                loading={loading}
                // disabled={loading || !newWorkspace.name.trim() || !newWorkspace.backgroundImage}
              >
                Create</Button>
              <Button variant='black' onClick={() => setOpen(false)}>Cancel</Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
