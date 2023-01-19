import React, { useState } from 'react'
import "./SideNav.css";

const clickRatingHandler=(index)=>{

}


function Sidenav() {
   const [ratings, setRatings] = useState([...Array(5)].fill(false));
  return (
    <div className='sidenav'>
        {ratings.map((item,index)=>{

          ratings[index]?
          <div onClick={()=>clickRatingHandler(index)}></div>: <div onClick={()=>clickRatingHandler(index)}></div>
          
          
        })}
    </div>
  )
}

export default Sidenav