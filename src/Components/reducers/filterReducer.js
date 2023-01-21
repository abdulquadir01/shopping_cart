

const filterReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_FILTER_STATE":
            console.log("change order me aa gya!!!")
            return {...state,...action.payload}
        case "CHANGE_INSTOCK_STATE":
           return 
        default:
            return state;
    }
}

export default filterReducer;
