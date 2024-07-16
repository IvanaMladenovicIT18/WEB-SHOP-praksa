import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>  
            <Routes>
              <Route path="/" element={<HomeScreen/>} exact />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
