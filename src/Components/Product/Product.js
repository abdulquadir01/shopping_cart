import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CartState } from '../Context/Context';
import "./Product.css";

function Product({ product }) {
  const { state, dispatch } = CartState();
  // console.log(product.id);
  
  return (
    <div className='product'>
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><img className='card-img-top' src={product.fashion} alt="" /></li>
          <li className="list-group-item">{product.name}</li>
          <li className="list-group-item">{product.price}</li>
          <li className="list-group-item">{
            [...Array(5)].map((item, index) => {
              return (


                index < product.ratings ? (<button className='rating-btn' key={index}>
                  <AiFillStar />
                </button>)
                  :
                  (<button key={index} className='rating-btn'>
                    <AiOutlineStar />
                  </button>)
              )
            })
          }</li>
        </ul>
        <div className="card-footer">
          { state.cart.some((item) =>  {return item.id === product.id}) ? (
            <button onClick={() =>{ 
            dispatch({
            type: "REMOVE_FROM_CART",
            payload: product
          })}} type="button" className="btn btn-primary">REMOVE FROM CART</button>
           
          ):(

            <button onClick={() => dispatch({
              type: "ADD_TO_CART",
              payload: { ...product, qty: 1 }
            })} type="button" className="btn btn-primary">ADD TO CART</button>
          )



          }
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