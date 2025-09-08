'use server'

import { post } from '@/api/fetch'
import { type CreateWorkspace } from '@/types/workspace-types'

export async function createWorkspaceAction(formData: FormData) {
  const response = await post('/workspaces', formData)
  return response
}
