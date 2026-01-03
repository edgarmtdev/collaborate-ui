import { post } from '@/api/fetch'

export async function createBoard(workSpaceUuid: string, boardName: string) {
  const response = await post('/boards', { workSpaceUuid, boardName })
  return response
}
