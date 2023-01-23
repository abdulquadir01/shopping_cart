import React, { useState } from 'react'
import "./SideNav.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import OrderRadioButtons from '../OrderRadioButtons/OrderRadioButtons';
import InStockCheckbox from '../InStockCheckbox/InStockCheckbox';
import { CartState } from '../Context/Context';





function SideNav() {
  const [ratings, setRatings] = useState([false, false, false, false, false]);
  const {filterState,filterDispatch}=CartState();
  
  const clickRatingHandler = (i) => {
    let arr = ratings;
    for (let index = 0; index < ratings.length; index++) {
      if (index <= i)
        arr[index] = true;
      else
        arr[index] = false;


    }
    console.log("arrray hai ", arr);
    setRatings([...arr]);
  }
 

  const filterChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.type==="checkbox"?e.target.checked:e.target.value; 
    filterDispatch({
      type:"CHANGE_FILTER_STATE",
      payload:{[name]:value}
    });

}


  return (
    <div className='sidenav'>
    <h3>Filter Products</h3>
    <div>
      {/* {
        ratings.map((item, index) => {

          return item ? (<button className='rating-btn' key={index} onClick={() => clickRatingHandler(index)}>
            <AiFillStar />
          </button>
          ) : (
            <button key={index} className='rating-btn' onClick={() => clickRatingHandler(index)}>
              <AiOutlineStar />
            </button>
          )

        }
        )} */}
        </div>
      
      <OrderRadioButtons filterChangeHandler={filterChangeHandler}/>
      <InStockCheckbox filterChangeHandler={filterChangeHandler} inStock={filterState.inStock}/>
      <button onClick={()=>
        filterDispatch({
          type:"CLEAR_FILTERS",
          payload:{
            order:"",
            inStock:false
          }
        })
      }>Clear all filters</button>

    </div>
  )
}

export default SideNav

