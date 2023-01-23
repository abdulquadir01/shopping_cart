import './App.css';

import Headerr from "./Components/Headerr/Headerr.js";
import Layout from './Components/Layout/Layout';
import SideNav from './Components/SideNav/SideNav';
import Products from './Components/Products/Products';
import { useState } from 'react';

import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './Components/Home/Home';
import CartPage from './Components/CartPage/CartPage';

function App() {

  return (

  
    <BrowserRouter>
      <Headerr />
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      
      </BrowserRouter>
    


  );
}

export default App;
