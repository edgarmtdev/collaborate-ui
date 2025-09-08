import { get, post } from '@/api/fetch'
import type { CreateWorkspace, Workspace } from '@/types/workspace-types'

export async function getWorkspaces(): Promise<Workspace[]> {
  return await get('/workspaces')
}

export async function getWorkspaceByUuid(uuid: string) {
  const workspace = await get(`/workspaces/${uuid}`)
  return JSON.parse(JSON.stringify(workspace))
}

export async function createWorkspace(data: CreateWorkspace) {
  return await post('/workspaces', data)
}
