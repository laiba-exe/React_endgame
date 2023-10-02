
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import  Link  from './Components/Link';  
import Main from './Components/Main';
import LoginPage from './Components/Login';
import Youtube from './Components/Youtube';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;


  export default function App() {


  return (
    <Routes>
     
      <Route path='/' element={<LoginPage />} />
      <Route path='main' element={<Main />} />
      <Route path='home' element={<Home />} />
      <Route path='link' element={<Link/>}/>
      <Route path='Youtube' element={<Youtube/>}/>
    </Routes>
  );
}
