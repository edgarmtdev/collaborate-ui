'use client'

import { createWorkspaceAction } from '@/app/actions/workspace'
import { Icon } from '@/components/ui'
import { Chevron } from '@/icons'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ChangeEvent, useState } from 'react'
import { css } from '~root/styled-system/css'
import { WorkspaceCard } from '../workspace-card'

import { type Workspace } from '@/types/workspace-types'
import { CreateWorkspaceModal } from '../create-workspace-modal'

type Props = {
  title: string
  workspaces: Workspace[]
  defaultOpen?: boolean
}

export const classes = {
  separator: css({
    my: 48,
    color: 'text',
    borderBottom: 1,
    borderBottomStyle: 'solid',
    borderColor: 'coolGray.200',
    userSelect: 'none'
  }),
  flexSection: css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    w: '100%',
    lg: {
      gap: 32
    }
  })
}

export function WorkspacesCollapsible({
  title = 'All',
  workspaces,
  defaultOpen = true
}: Props) {
  const [open, setOpen] = useState(defaultOpen)
  const [workspacesList, setWorkspacesList] = useState<Workspace[]>(workspaces)

  return (
    <>
      <Collapsible.Root
        open={open}
        onOpenChange={setOpen}
      >
        <div className={classes.separator}>
          <Collapsible.Trigger asChild>
            <div className={css({
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              _hover: {
                color: 'heading'
              }
            })}>
              <Icon
                icon={Chevron}
                color='neutral'
                size='sm'
                className={css({
                  rotate: open ? '0deg' : '-90deg',
                  transition: 'all 200ms ease-in'
                })}
              />
              <span>{title}</span>
            </div>
          </Collapsible.Trigger>
        </div>
        <Collapsible.Content>
          <div className={classes.flexSection}>
            {workspacesList.map((workspace: Workspace) => (
              <WorkspaceCard key={workspace.id} workspace={workspace} />
            ))}
            <CreateWorkspaceModal />
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  )
}
