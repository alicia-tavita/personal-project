// import { useTodos } from '../hooks/useTodos.ts'
import Todos from './Todos.tsx'

export default function App() {
  // const { data } = useTodos()

  return (
    <>
      <div className="app">
        <Todos />
      </div>
    </>
  )
}
