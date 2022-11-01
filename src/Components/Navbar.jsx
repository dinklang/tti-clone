import React from 'react'
import '../Styles/Navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <Router>
      <Link><p>ABOUT</p></Link>
      <Link><p>ENGINEERING</p></Link>
      <Link><p>SERVICES</p></Link>
      <Link><p>CONTACT</p></Link>
    </Router>
  </>

)

function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className='tti-navbar_container'>
      <div className='tti-navbar_container--logo'>
        <img src={require("../Assets/turbine-logo.png")}></img>
        <div className='tti-navbar_container--logo__text'>
          <p>TEXAS</p>
          <p>TURBINE INC</p>
        </div>
      </div>
      <div className='tti-navbar_container--links'><Menu /></div>
      <div className='tti-navbar_container--menu'>{toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="tti-navbar_menu scale-up-center">
            <div className="tti-navbar_menu--links">
              <Menu />
            </div>
          </div>
        )}</div>
    </div>
  )
}

export default Navbar;