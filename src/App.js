import React, { useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { userObserver } from './auth/firebase';
import Home from "./pages/Home"



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
      <Home/>
    </div>
  );
}

export default App;
