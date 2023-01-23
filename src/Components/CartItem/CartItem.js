import React from 'react'
import "./CartItem.css"
import { RiDeleteBinFill } from "react-icons/ri"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function CartItem({ cart_item, dispatch }) {
    return (
        <div className='cart-item'>
            <div>{<img style={{ width: "200px", height: "100px" }} src={cart_item.fashion} alt="" />}</div>
            <div>{cart_item.name}</div>
            <div>Rs.{cart_item.price}</div>
            <div >
                {[...Array(5)].map((item, index) => {
                    if (index < cart_item.ratings)
                        return <AiFillStar key={index} />
                    else
                        return <AiOutlineStar key={index} />
                })}
            </div>
            <div>
                <button onClick={() => {
                    dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                            id: cart_item.id,
                            qty: cart_item.qty - 1

                        }
                    })
                }} type="button" className="btn btn-outline-secondary">-</button>
                <span>{cart_item.qty}</span>
                <button onClick={() => {
                    dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                            id: cart_item.id,
                            qty: cart_item.qty + 1
                        }
                    })
                }} type="button" className="btn btn-outline-secondary">+</button>
            </div>
            <div><button onClick={() => {
                dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: cart_item
                })
            }} type="button" className="btn btn-outline-secondary"><RiDeleteBinFill /></button></div>
        </div>
    )
}

export default CartItem