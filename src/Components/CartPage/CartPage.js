import React from 'react'
import CartItems from '../CartItems/CartItems'
import CartTotal from '../CartTotal/CartTotal'
import "./CartPage.css"
function CartPage() {
  return (
    <div className='cart-page'>
   
        <CartItems/>
        <CartTotal/>
    </div>
  )
}

export default CartPage