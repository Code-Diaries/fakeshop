import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { userObserver } from './auth/firebase';




import Login from "./pages/Login"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import ShippingAdress from './pages/ShippingAdress'
import PrivateRouter from './router/PrivateRouter'
import Footer from './components/Footer/Footer';
import AppRouter from './router/AppRouter';
function App() {

  let currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    userObserver(dispatch);
    console.log("değişti kullanıcı")
  }, [currentUser]);

  return (
    <div className="App">
   <AppRouter/>
    </div>
  );
}

export default App;



