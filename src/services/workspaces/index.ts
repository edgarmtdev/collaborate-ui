import { get } from '@/api/fetch'
import { Workspace } from '@/types/workspace-types'

export async function getWorkspaces(): Promise<Workspace[]> {
  return await get('/workspaces')
}