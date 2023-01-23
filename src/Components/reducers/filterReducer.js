

const filterReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_FILTER_STATE":
            
            return {...state,...action.payload}
        case "CLEAR_FILTERS":
            console.log("change order me aa gya!!!")
           return {...state,...action.payload}
      
        default:
            return state;
    }
}

export default filterReducer;
