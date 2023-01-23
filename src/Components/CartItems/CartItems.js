import React from 'react';
import CartItem from '../CartItem/CartItem';
import { CartState } from '../Context/Context';
import "./CartItems.css"

function CartItems() {
    const { state ,dispatch} = CartState();
    console.log("hello from cart items",state.cart);
    return (

        <div className='cart-items'>
            {state.cart.map((cart_item, index) => {
                return <CartItem key={index} cart_item={cart_item} dispatch={dispatch}/> 
            })}

        </div>
    )
}


export default CartItems