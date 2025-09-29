import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Price from './pages/Price/Price';
import Player from './pages/Player/Player';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/price' element={<Price />} />
         <Route path="/player/:trailer" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
