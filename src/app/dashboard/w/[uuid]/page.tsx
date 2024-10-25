import { getWorkspaceByUuid } from '@/services/workspaces'
import { css } from '~root/styled-system/css'

type Props = {
  params: { uuid: string }
}

export default async function WorkspacePage({ params }: Props) {
  const { uuid } = params

  const workspace = await getWorkspaceByUuid(uuid)

  return (
    <div className={css({ mt: 80 })}>{workspace.name}</div>
  )
}
