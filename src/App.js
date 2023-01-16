import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userObserver } from './auth/firebase';
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
      <AppRouter />
    </div >
  );
}

export default App;



