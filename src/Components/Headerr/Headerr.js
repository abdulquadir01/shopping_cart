import React from 'react'
import { NavLink } from "react-router-dom"
function Headerr() {
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">ShoppingCart</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <ul style={{position:"absolute",right:"80px"}}  className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>

                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Headerr