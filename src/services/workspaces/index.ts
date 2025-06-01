import { get } from '@/api/fetch'
import { Workspace } from '@/types/workspace-types'

export async function getWorkspaces(): Promise<Workspace[]> {
  return await get('/workspaces')
}

export async function getWorkspaceByUuid(uuid: string) {
  const workspace = await get(`/workspaces/${uuid}`)
  return JSON.parse(JSON.stringify(workspace))
}
