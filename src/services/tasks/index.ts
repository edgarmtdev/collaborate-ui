import { post } from '@/api/fetch'

export async function createBoardTask(data: { boardUuid: string; taskTitle: string }) {
  const response = await post('/tasks', {
    boardUuid: data.boardUuid,
    title: data.taskTitle
  })
  return response
}

export async function updateTaskPosition(taskUuid: string, boardUuid: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/move-task`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ taskUuid, boardUuid })
  })
  return response
}
