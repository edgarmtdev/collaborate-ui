import { getWorkspaceByUuid } from '@/services/workspaces'

type Props = {
  params: { uuid: string }
}

export default async function WorkspacePage({ params }: Props) {
  const { uuid } = params

  const workspace = await getWorkspaceByUuid(uuid)

  return (
    <div>{workspace.name}</div>
  )
}
