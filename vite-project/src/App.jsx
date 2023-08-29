import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Register from './pages/Register'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <ChakraProvider>
    <div className="container">
         
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
           {/* <Route path="/products" element={<Product />}/>  */}
           {/* <Route path="/product-detail" element={<ProductDetail />} />  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           {/* <Route path="/Home" element={<Home />} />    */}
           
          
          
        
      </Routes>
    </BrowserRouter>   
    
         
         
    </div>

    </ChakraProvider>
    
  )
}

export default App;
