import { Todo } from "./Todos"

export function removeItem(arr: Todo[], item: Todo) {
  const index = arr.map((item) => item?.count).indexOf(item.count)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
