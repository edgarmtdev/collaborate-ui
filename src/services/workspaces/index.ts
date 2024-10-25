import { get } from '@/api/fetch'
import { Workspace } from '@/types/workspace-types'

export async function getWorkspaces(): Promise<Workspace[]> {
  return await get('/workspaces')
}

export async function getWorkspaceByUuid(uuid: string): Promise<Workspace> {
  return await get(`/workspaces/${uuid}`)
}