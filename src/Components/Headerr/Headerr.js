import React from 'react'
import {BsCartCheckFill} from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { CartState } from '../Context/Context'
import "./Headerr.css";
function Headerr() {
  const { state: { cart, dispatch } } = CartState();
  return (

    <div className='headerr'>
      <nav className="navbar navbar-expand-lg bg-dark-subtle">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">ShoppingCart</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <ul style={{ position: "absolute", right: "80px" }} className="navbar-nav me-auto mb-2 mb-lg-0">

              <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <BsCartCheckFill/>
                {cart.length>0?<span className="badge text-bg-secondary bg-danger">{cart.reduce((acc,curr)=>{
                  return acc+curr.qty
                },0)}</span>
                :""}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {cart.map((item) => {
                    return <div key={item.id}>
                      <li><NavLink className="dropdown-item" to="#">{item.id}</NavLink></li>
                      <li><hr className="dropdown-divider" /></li>

                    </div>
                  })
                  }

                  <li><NavLink className="dropdown-item" to="/cart">Go to Cart</NavLink></li>
                </ul>
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Headerr