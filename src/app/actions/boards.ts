'use server'
import { createBoard } from '@/services/boards'

export async function createNewBoardAction(formData: FormData) {
  const workSpaceUuid = formData.get('workSpaceUuid') as string
  const boardName = formData.get('boardName') as string
  const response = await createBoard(workSpaceUuid, boardName)
  return response
}
