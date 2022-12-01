import { FC, ReactElement } from "react"
import Todos from "../../components/Todo/Todos"

const TodoList: FC = (): ReactElement => {
  return (
    <div>
      <Todos />
    </div>
  )
}

export default TodoList
