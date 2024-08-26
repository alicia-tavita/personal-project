import request from 'superagent'

export async function fetchTodos() {
  const response = await request.get('api/v1/todos')
  return await response.body
}

export async function completeTodo(id: number) {
  const response = await request.patch(`api/v1/todos/${id}`)
  return await response.body
}
