'use server'

import { post } from '@/api/fetch'
import { type CreateWorkspace } from '@/types/workspace-types'

export async function createWorkspaceAction(params: CreateWorkspace) {
  const response = await post('/workspaces', params)
  return JSON.parse(JSON.stringify(response))
}
