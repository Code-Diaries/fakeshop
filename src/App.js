import React from 'react';
import Register from "./pages/Register"

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Register/>
    </div>
  );
}

export default App;
