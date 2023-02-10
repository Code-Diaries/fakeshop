import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux';
import { userObserver } from './auth/firebase'; 
import Login from "./pages/Login" 
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import ShippingAdress from './pages/ShippingAdress'
import PrivateRouter from './router/PrivateRouter'
import FavoritePro from "./pages/FavoritePro"   
import { Admin } from "react-admin";

function App() {  
 
  let currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    userObserver(dispatch);
    console.log("değişti kullanıcı")
  }, [currentUser]);

  return (
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/productDetail' element={<PrivateRouter />}>
      <Route path="" element={<ProductDetail />} /> 
      </Route> 
      <Route path='/shippingAdress' element={<PrivateRouter />}>
        <Route path="" element={<ShippingAdress />} />
      </Route>
      <Route path='/favoriteproduct' element={<FavoritePro />} >  </Route>
    </Routes>
  </BrowserRouter>

  );
} 
export default App;