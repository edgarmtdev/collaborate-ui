import { post } from '@/api/fetch'

export async function createBoardTask(data: { boardUuid: string; taskTitle: string }) {
  const response = await post('/tasks', {
    boardUuid: data.boardUuid,
    title: data.taskTitle
  })
  return response
}
