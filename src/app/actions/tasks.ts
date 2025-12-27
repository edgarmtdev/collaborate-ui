'use server'

import { createBoardTask } from '@/services/tasks'
import { revalidatePath } from 'next/cache'

export async function createTaskAction(formData: FormData) {
  const boardUuid = formData.get('boardUuid') as string
  const taskTitle = formData.get('taskTitle') as string
  const workspaceUuid = formData.get('workspaceUuid') as string

  const response = await createBoardTask({ boardUuid, taskTitle })

  if (workspaceUuid) {
    revalidatePath(`/dashboard/w/${workspaceUuid}`)
  }

  return response
}
