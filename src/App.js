import React, { useEffect } from 'react';
import Register from "./pages/Register"
import './App.css';
import Navbar from './components/Navbar/Navbar';

import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { userObserver } from './auth/firebase';




function App() {

  let currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    userObserver(dispatch);
    console.log("değişti kullanıcı")
  }, [currentUser]);

  return (
    <div className="App">
      <Navbar/>
    
       <Login/>
      {/* <Register/> */}
     
    </div>
  );
}

export default App;
