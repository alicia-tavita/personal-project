import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Todo } from '../../models/todo'
import { completeTodo, fetchTodos } from './apiClient'

function Todos() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => await fetchTodos(), // changed to fetchTodos
  })

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: completeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  async function handleTodoCompletion(el: Todo) {
    const todoId = el.id
    mutation.mutate(todoId)
  }

  if (isError) {
    console.log(error, 'error')
  }

  if (isLoading) {
    console.log('loading')
  }

  if (data)
    return (
      <>
        <div className="todoContainer">
          <h2>Backlog</h2>
          <ul>
            {data.map(
              (el: Todo) =>
                el.completed === 0 && (
                  <li key={el.id}>
                    <button onClick={() => handleTodoCompletion(el)}></button>
                    <p>{el.task}</p>
                    <p>{el.description}</p>
                    <p>{el.user_id}</p>
                  </li>
                ),
            )}
          </ul>
          <h2>Completed</h2>
          <ul>
            {data.map(
              (el: Todo) =>
                el.completed === 1 && (
                  <li key={el.id}>
                    <button onClick={() => handleTodoCompletion(el)}>✔</button>
                    <p>{el.task}</p>
                    <p>{el.description}</p>
                    <p>{el.user_id}</p>
                  </li>
                ),
            )}
          </ul>
        </div>
      </>
    )
}

export default Todos
