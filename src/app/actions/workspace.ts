'use server'

import { post } from '@/api/fetch'

export async function createWorkspaceAction(formData: FormData) {
  const response = await post('/workspaces', formData)
  return response
}
