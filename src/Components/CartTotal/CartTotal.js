import React from 'react'
import { CartState } from '../Context/Context'
import "./CartTotal.css"
function CartTotal() {
  const { state } = CartState();
  return (
    <div className='cart-total'>
      {state.cart.length > 0 ?
        <div>
          <div>
            Count: {state.cart.reduce((acc, curr) => {
              return acc + curr.qty
            }, 0)}
          </div>
          <div>
            Total: Rs.{state.cart.reduce((acc, curr) => {
              return acc + curr.price*curr.qty
            }, 0)}
          </div>
        </div>
        : ""
      }
    </div>
  )
}

export default CartTotal