
import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import HomePage from '../pages/HomePage'
import ProductDetail from '../pages/ProductDetail'
import ShippingAdress from '../pages/ShippingAdress'
import PrivateRouter from './PrivateRouter'


const AppRouter = () => {
  return (
     
      <BrowserRouter>
          <Navbar/>
          <Routes>
               <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<Login/>}/>
              <Route path='/productDetail' element={<PrivateRouter/>}>
              <Route path="" element={<ProductDetail/>}/>
                </Route>
              <Route path='/shippingAdress' element={<PrivateRouter />}>
              <Route path="" element={<ShippingAdress/>}/>
                 </Route>
             </Routes>
          </BrowserRouter>
   
  )
}

export default AppRouter