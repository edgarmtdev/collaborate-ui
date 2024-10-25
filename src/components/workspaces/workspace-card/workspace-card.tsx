import { Workspace } from '@/types/workspace-types'
import Image from 'next/image'
import Link from 'next/link'
import { css } from '~root/styled-system/css'

type Props = {
  workspace: Workspace
}

export function WorkspaceCard({ workspace }: Props) {
  return (
    <Link href={`/dashboard/w/${workspace.uuid}`}>
      <article className={css({
        pos: 'relative',
        aspectRatio: 'video',
        w: '100%',
        color: 'white',
        fontWeight: 'semibold',
        borderRadius: 4
      })}>
        <div className={css({
          pos: 'absolute',
          top: 0,
          left: 0,
          w: '100%',
          h: '100%',
          p: 8,
          borderRadius: 4,
          zIndex: 'docked',
          background: { base: 'black/20', _hover: 'black/30' }
        })}>
          <h2>{workspace.name}</h2>
        </div>
        {workspace.backgroundUrl && <figure>
          <Image
            fill
            loading='eager'
            alt={workspace.name}
            src={workspace.backgroundUrl}
            className={css({ objectFit: 'cover', borderRadius: 4 })}
          />
        </figure>}
      </article>
    </Link>
  )
}
