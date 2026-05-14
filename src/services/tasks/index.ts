import { patch, post } from '@/api/fetch'

export async function createBoardTask(data: { boardUuid: string; taskTitle: string }) {
  const response = await post('/tasks', {
    boardUuid: data.boardUuid,
    title: data.taskTitle
  })
  return response
}

export async function updateTaskPosition(taskUuid: string, boardUuid: string) {
  const response = await patch('/tasks/move-task', {
    taskUuid,
    boardUuid
  })
  return response
}
