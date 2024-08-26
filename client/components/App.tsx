import { useTodos } from '../hooks/useTodos.ts'
import Todos from './Todos.tsx'

function App() {
  const { data } = useTodos()

  return (
    <>
      <div className="app">
        <Todos />
        {/* <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      </div>
    </>
  )
}

export default App
