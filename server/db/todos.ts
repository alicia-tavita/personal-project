import connection from './connection.ts'
import { Todo } from '../../models/todo.ts'

export async function getAllToDos(): Promise<Todo[]> {
  return connection('todos')
    .join('users', 'todos.user_id', '=', 'users.id')
    .select(
      'users.name as name',
      'todos.id as id',
      'task',
      'description',
      'completed',
    )
}

export async function updateToDos(id: number) {
  const completed = await connection('todos')
    .where({ id })
    .select('completed')
    .first()
  const val = completed.completed ? false : true

  await connection('todos').where({ id }).update('completed', val)
}
