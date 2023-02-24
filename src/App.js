import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'  
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import ShippingAdress from './pages/ShippingAdress' 
import FavoritePro from "./pages/FavoritePro"   
import Footer from './components/Footer/Footer';

function App() {    
  return (
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/productDetail' element={<ProductDetail />} /> 
      <Route path='/shippingAdress' element={<ShippingAdress />} />  
      <Route path='/favoriteproduct' element={<FavoritePro />} />  
    </Routes>
    <Footer />
  </BrowserRouter> 
  );
} 
export default App;
