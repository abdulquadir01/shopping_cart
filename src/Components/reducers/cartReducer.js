

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("added!!!!");
            return { ...state, cart: [...state.cart, action.payload] }
        case "REMOVE_FROM_CART":
            console.log("removed!!!!",action.payload);
            return { ...state, cart: state.cart.filter((cart_element,index)=>{
                return cart_element.id!==action.payload.id
            }) }
        default:
            return state;
    }
}

export default cartReducer;
