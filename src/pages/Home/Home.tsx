import { FC, ReactElement, useEffect, useState } from "react"
import Login from "../../components/Login/Login"

const Home: FC = (): ReactElement => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 500)
  }, [])

  return <>{visible ? <Login /> : null}</>
}

export default Home
