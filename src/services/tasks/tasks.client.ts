// This file is no longer used. DnD operations now use Server Actions.
// See: src/app/actions/tasks.ts

export async function updateTaskPosition(taskUuid: string, boardUuid: string) {
  // Deprecated: Use updateTaskPositionAction from @/app/actions/tasks instead
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/move-task`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ taskUuid, boardUuid })
  })
  return response
}
