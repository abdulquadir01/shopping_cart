// import { createContext } from "react";
import { faker } from '@faker-js/faker';
import React, { createContext, useContext, useReducer } from 'react';
import cartReducer from '../reducers/carReducer';
const Cart = createContext();



function Context({ children }) {


    const products = [...Array(20)].map((item, index) => {
        return {
            "name": faker.commerce.product(),
            "price": faker.commerce.price(),
            "fashion": faker.image.abstract(),
            "ID": faker.datatype.uuid(),
            "Dept": faker.commerce.department()
        }
    });


    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    console.log(state);

    return (
        
        <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}