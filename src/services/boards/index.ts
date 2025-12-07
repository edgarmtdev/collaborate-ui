import { post } from "@/api/fetch"

export async function createBoard(workspaceUuid: string, boardName: string) {
  const response = await post('/boards/create', { workspaceUuid, boardName })
  return response
}
