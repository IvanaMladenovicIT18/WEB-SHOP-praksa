import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx"
import './App.css'
import SingleProduct from './screens/SingleProduct.jsx';

function App() {

  return (
    <>
      <BrowserRouter>  
            <Routes>
              <Route path="/" element={<HomeScreen/>} exact />
              <Route path="/products/:id" element={<SingleProduct/>} exact />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
