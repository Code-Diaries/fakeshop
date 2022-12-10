import Login from "./pages/Login"
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import ShippingAdress from './pages/ShippingAdress'
import PrivateRouter from './router/PrivateRouter'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/productDetail' element={<PrivateRouter />}>
            <Route path="" element={<ProductDetail />} />
          </Route>
          <Route path='/shippingAdress' element={<PrivateRouter />}>
            <Route path="" element={<ShippingAdress />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



