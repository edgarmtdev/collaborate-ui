'use client'

import { Avatar } from '@/components/ui'
import { SendInvitationModal } from '@/components/workspaces/send-invitation/send-invitation-modal'
import { formatAvatarFallback } from '@/helpers'
import { User } from '@/types/user-types'
import { Workspace } from '@/types/workspace-types'
import { css } from '~root/styled-system/css'
import styles from './styles'

export function WorkspaceHeader({ workspace, userLogged }: { workspace: Workspace, userLogged: User }) {
  const isOwner = workspace.owner.email === userLogged.email
  return (
    <section>
      <div className={styles.root}>
        <h3>{workspace?.name}</h3>
        <div className={css({ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 })}>
          <div className={css({ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 })}>
            {workspace.members.slice(0, 10).map((member) => (
              <Avatar
                key={member.id}
                src={member.avatarURL}
                size='xs'
                bgColor='primary.700'
                radius='full'
                fallback={formatAvatarFallback(member.name, member.lastname)}
              />
            ))}
          </div>
          {isOwner &&
            <SendInvitationModal workspace={workspace} />}
        </div>
      </div>
    </section>
  )
}
