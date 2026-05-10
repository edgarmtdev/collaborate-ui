export async function updateTaskPosition(taskUuid: string, boardUuid: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/move-task`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ taskUuid, boardUuid })
  })
  return response
}
