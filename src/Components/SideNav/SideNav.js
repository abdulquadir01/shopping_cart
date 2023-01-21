import React, { useState } from 'react'
import "./SideNav.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";




function SideNav() {
  const [ratings, setRatings] = useState([false,false,false,false,false]);

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



  return (
    <div className='sidenav'>
      {
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
        )}
    </div>
  )
}

export default SideNav