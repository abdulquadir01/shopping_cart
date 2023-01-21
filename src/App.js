import './App.css';

import Headerr from "./Components/Headerr/Headerr.js";
import Layout from './Components/Layout/Layout';
import SideNav from './Components/SideNav/SideNav';
import Products from './Components/Products/Products';
import { useState } from 'react';



function App() {
 
  return (

    <div className="app">
     <Headerr />
      
      <div className='body-container'> 

        <SideNav />
        <Products />
      </div>

    </div>
  );
}

export default App;
