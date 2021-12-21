import React, { useState } from "react"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import "../styles/Navbar.css"

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='' />
        <div className='hiddenLinks'>
          <Link to='/'> Home </Link>
          <Link to='/menu'> Menu </Link>
          <Link to='/about'> About </Link>
          <Link to='/contact'> Contact </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'> Home </Link>
        <Link to='/menu'> Menu </Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
