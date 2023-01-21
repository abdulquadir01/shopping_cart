import React from 'react'

function InStockCheckbox({filterChangeHandler,inStock}) {
    return (
        <div>
            <div className="form-check">
                <input onChange={(e)=>filterChangeHandler(e)} className="form-check-input" type="checkbox" name="inStock" id="defaultCheck1" checked={inStock}/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        inStock
                    </label>
            </div>
        </div>
    )
}

export default InStockCheckbox