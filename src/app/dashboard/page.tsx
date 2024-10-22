import { validateUser } from '@/services/auth'
import { getWorkspaces } from '@/services/workspaces'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { css } from '~root/styled-system/css'

export default async function Dashboard() {
  const { isLoggedIn } = await validateUser()

  if (!isLoggedIn) {
    redirect('/auth/login')
  }

  const workspaces = await getWorkspaces()

  return (
    <div className={css({ p: 12, display: 'grid', gridTemplateColumns: 5, gap: 16 })}>
      {workspaces?.map((workspace) => (
        <article className={css({
          pos: 'relative',
          aspectRatio: 'video',
          w: '100%',
          color: 'coolGray.25',
          fontWeight: 'semibold',
          borderRadius: 4
        })}>
          {workspace.backgroundUrl && <figure>
            <Image
              fill
              loading='eager'
              alt={workspace.name}
              src={workspace.backgroundUrl}
              className={css({ objectFit: 'cover', borderRadius: 4 })}
            />
          </figure>}
          <div className={css({
            pos: 'absolute',
            top: 0,
            left: 0,
            w: '100%',
            h: '100%',
            p: 8,
            borderRadius: 4,
            background: 'linear-gradient(180deg, rgba(0,0,0,1) 6%, rgba(255,255,255,0.5886729691876751) 91%)'
          })}>
            <h2>{workspace.name}</h2>
          </div>
        </article>
      ))}
    </div>
  )
}
