'use client'

import { createWorkspaceAction } from '@/app/actions/workspace'
import { Button, FileSelector, Input } from '@/components/ui'
import * as Dialog from '@radix-ui/react-dialog'
import { ChangeEvent, useState } from 'react'
import { css } from '~root/styled-system/css'

export function CreateWorkspaceModal() {
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
      console.log('🚀 ~ handleCreateWorkspace ~ data:', data)
      if (data) {
        // handleCloseModal()
        // setWorkspacesList((prev) => [...prev, data])
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
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className={css({
          w: 'calc(50% - 6px)',
          h: 100,
          border: '1px dashed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          sm: {
            w: '33%'
          },
          md: {
            h: 150
          },
          lg: {
            w: '33%',
            h: 150
          },
          xl: {
            w: '18%',
            h: 150
          },
          pos: 'relative',
          borderRadius: 4,
          '& img': {
            objectFit: 'cover',
            borderRadius: 4
          },
          '&:hover': {
            backgroundColor: 'coolGray.25'
          },
          cursor: 'pointer',
          transition: 'background-color 100ms ease-in'
        })}>Create new workspace</div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={css({
          pos: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 'overlay'
        })} />
        <Dialog.Content className={css({
          pos: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '500px',
          backgroundColor: 'white',
          opacity: 1,
          borderRadius: '8px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          zIndex: 'modal'
        })}>
          <Dialog.Title style={{ fontWeight: 700, fontSize: '22px' }}>Create a new workspace</Dialog.Title>
          <div className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          })}>
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
                disabled={loading || !newWorkspace.name.trim() || !newWorkspace.backgroundImage}
              >
                Create</Button>
              {/* <Button variant='black' onClick={handleCloseModal}>Cancel</Button> */}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
