import React, { useState } from 'react';
import Navbar from './Component/Navbar'
import './App.css';
import Home from './Component/Home';
import Products from './Component/Products';
import About_us from './Component/About_us.js';
import Logindetails from './Component/Logindetails.js';
import Footer from './Component/Footer';
import Cart from './Component/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () =>{
  
  return (
      <><Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} href="/Home" />
        <Route path="/Products" element={<Products />} href="/Products" />
        <Route path="/About_us" element={<About_us />} href="/About_us" />
        <Route path="/Logindetails" element={<Logindetails />} href="/Logindetails" />
        <Route path="/Cart" element={<Cart/>} href="/Cart" />
       {/*<Route path="/ProductListt" element={<ProductListt />} href="/ProductListt" />*/}


      </Routes>
    </Router>
    <Footer /></>
  );
};

export default App;