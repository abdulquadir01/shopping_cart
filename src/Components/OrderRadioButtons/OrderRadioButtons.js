import React from 'react'
import { CartState } from '../Context/Context'

function OrderRadioButtons({filterChangeHandler}) {
    const {filterState,filterDispatch}=CartState();

  
    return (
        <div onChange={(e)=>filterChangeHandler(e)}>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="order" value="ascending" id="flexRadioDefault1" defaultChecked={filterState.order==="ascending"}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Ascending
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="order" value="descending" id="flexRadioDefault2"  defaultChecked={filterState.order==="descending"}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Descending
                </label>
            </div>
        </div>
    )
}

export default OrderRadioButtons