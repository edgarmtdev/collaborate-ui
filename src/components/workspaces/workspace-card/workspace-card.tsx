import { Workspace } from '@/types/workspace-types'
import Image from 'next/image'
import Link from 'next/link'
import classes from './workspace-card.styled'

type Props = {
  workspace: Workspace
}

export function WorkspaceCard({ workspace }: Props) {
  return (
    <Link
      href={`/dashboard/w/${workspace.uuid}`}
      className={classes.root}
    >
      <div className={classes.background}>
        <h3>{workspace.name}</h3>
      </div>
      {workspace.backgroundUrl && (
        <Image
          fill
          loading='eager'
          alt={workspace.name}
          src={workspace.backgroundUrl}
        />
      )}
    </Link>
  )
}
