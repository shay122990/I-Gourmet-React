import React from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={logo} alt='' />
      </div>
      <div className='rightSide'>
        <Link to='/'> Home </Link>
        <Link to='/menu'> Menu </Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
      </div>
    </div>
  )
}

export default Navbar
