import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home"
import TodoList from "../pages/Todos/TodoList"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "todos",
    element: <TodoList />,
  },
])

export default Router
