import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChakraProvider>
    <div className="container">
        <Home/>
    </div>

    </ChakraProvider>
    </>
  )
}

export default App
