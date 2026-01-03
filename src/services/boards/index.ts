import { post } from '@/api/fetch'

export async function createBoard(workSpaceUuid: string, boardName: string) {
  const response = await post('/boards/create', { workSpaceUuid, boardName })
  return response
}
