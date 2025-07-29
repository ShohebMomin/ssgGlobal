import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/Pages/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HomePage/>
    </>
  )
}

export default App
