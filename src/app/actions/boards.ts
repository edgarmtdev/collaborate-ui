'use server'
import { createBoard } from '@/services/boards'

export async function createNewBoard(formData: FormData) {
  const workspaceUuid = formData.get('workspaceUuid') as string
  const boardName = formData.get('boardName') as string
  await createBoard(workspaceUuid, boardName)
}