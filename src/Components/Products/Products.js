import React from 'react';
import { CartState } from '../Context/Context';

import Product from '../Product/Product';
import "./Products.css";

function Products() {
    const {state,dispatch}=CartState();
  return (
    <div className='products-container'>
       { state.products.map((item,index)=>{
            return <Product key={item.id} product={item}/>
        
        })
      }
    </div>
  )
}

export default Products