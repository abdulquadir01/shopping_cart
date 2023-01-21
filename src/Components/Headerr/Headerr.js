import React from 'react'
import { NavLink } from "react-router-dom"
import { CartState } from '../Context/Context'
function Headerr() {
  const { state: { cart, dispatch } } = CartState();
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg bg-dark-subtle">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">ShoppingCart</NavLink>
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
                  Right-aligned menu
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {cart.map((item) => {
                    return <>
                      <li><NavLink className="dropdown-item" to="#">{item.id}</NavLink></li>
                      <li><hr className="dropdown-divider" /></li>
                    </>
                  })
                  }


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