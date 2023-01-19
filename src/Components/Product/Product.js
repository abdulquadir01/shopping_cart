import React from 'react';
import "./Product.css";

function Product({ product }) {
  return (
    <div className='product'>
      <div className="card" style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><img className='card-img-top' src={product.fashion} alt=""/></li>
          <li className="list-group-item">{product.name}</li>
          <li className="list-group-item">{product.price}</li>
        </ul>
        <div className="card-footer">
        <button type="button" class="btn btn-primary">ADD_TO_CART</button>
        </div>
      </div>
{/* 
      <p></p>
      <p>{product.fashion}</p>
      <p>{product.price}</p>
      <p>{product.ID}</p> */}
    </div>
  )
}

export default Product