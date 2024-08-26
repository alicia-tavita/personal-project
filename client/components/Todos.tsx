import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getTodos } from './apiClient'

export default function Todos() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todo'],
    queryFn: getTodos,
  })

  const [todos, setTodos] = useState({
    todo: ['clean swamp', 'beat up donkey', 'scare humans'],
    completed: ['move boulder', 'eat eyeballs'],
  })
  function moveTodo(item: string) {
    setTodos({
      todo: [...todos.todo].filter((el) => el !== item),
      completed: [...todos.completed, item].sort(),
    })
  }
  function moveCompleted(item: string) {
    setTodos({
      todo: [...todos.todo, item].sort(),
      completed: [...todos.completed].filter((el) => el !== item),
    })
  }

  // if (isError) {
  // }

  // if (isLoading) {
  // }

  // if (data)
  return (
    <>
      <div className="todoContainer">
        <h1>Shrek&aposs Todos</h1>
        <ul>
          {/* map in here over data */}
          {/* Button to add to completed? */}
          {/* Input type = checkbox */}
          {todos.todo.map((el) => (
            <li key={el}>
              {el}
              <button onClick={() => moveTodo(el)}>click</button>
            </li>
          ))}
        </ul>
        <ul>
          {todos.completed.map((el) => (
            <li key={el}>
              {el}
              <button onClick={() => moveCompleted(el)}>click</button>
            </li>
          ))}
        </ul>
        {/* <Completed /> */}
      </div>
    </>
  )
}
