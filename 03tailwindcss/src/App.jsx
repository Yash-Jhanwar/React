import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg bg-green-400'>tailwind test </h1>
      <Card username="yash"/>
    </>
  )
}

export default App
