import React, { FC, ReactElement, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { removeItem } from "./array"
import "./todos.scss"

export type Todo = {
  count: number
  description: string
}

const Todos: FC = (): ReactElement => {
  const count = useRef(0)
  const [items, setItems] = useState<Todo[]>([])
  const [input, setInput] = useState("")
  return (
    <div className='container'>
      <div>
        <h1> My todo-list</h1>
      </div>
      <div className='controls'>
        <div className='input-todo'>
          <input
            type='text'
            placeholder='todo'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className='add-button'>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (!input) return
              setItems([...items, { count: count.current++, description: input }])
              setInput("")
            }}
          >
            Save
          </motion.button>
        </div>
      </div>
      <ul>
        <AnimatePresence mode={"popLayout"}>
          {items.map(({ count, description }) => (
            <motion.li
              className='todo'
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
              key={count}
            >
              <p contentEditable='true'>{description}</p>
              <div className='edit-button'>
                <motion.button>
                  <i className='fa fa-pencil'></i>
                </motion.button>
              </div>
              <div className='remove-button'>
                <motion.button
                  onClick={() => {
                    const newItems = [...items]
                    removeItem(newItems, { count, description })
                    setItems(newItems)
                  }}
                >
                  <i className='fa fa-trash' aria-hidden='true'></i>
                </motion.button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default Todos
