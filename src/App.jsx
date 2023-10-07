import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Genre from './Components/Genre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Genre/>
      
    </>
  )
}

export default App
