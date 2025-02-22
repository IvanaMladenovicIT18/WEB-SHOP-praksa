import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx"
import './App.css'
import SingleProduct from './screens/SingleProduct.jsx';
import CartScreen from './screens/CartScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';

function App() {

  return (
    <>
      <BrowserRouter>  
            <Routes>
              <Route path="/" element={<HomeScreen/>} exact />
              <Route path="/products/:id" element={<SingleProduct/>} exact />
              <Route path="/cart" element={<CartScreen/>} exact />
              <Route path='/profile' element={<ProfileScreen/>} exact />
              <Route path='/login' element={<Login/>} exact />
              <Route path='/register' element={<Register/>} exact />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
