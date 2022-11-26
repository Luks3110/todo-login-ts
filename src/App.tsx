import React, { useState } from 'react'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      {count}
      <Login />
    </div>
  )
}

export default App
