import React from 'react'
import Layout from '../Layout/Layout'
import Products from '../Products/Products'
import SideNav from '../SideNav/SideNav'
import "./Home.css";

function Home() {
    return (
        <div className="home-page">
            <SideNav />
            <Products />
        </div>
    )
}

export default Home