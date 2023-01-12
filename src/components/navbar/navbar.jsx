import React, { useState } from 'react'
import logo from '../../assets/Frame.png'
import "./navbar.css"
import { NavLink, Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));

  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => window.pageYOffset > 200 ? setVisible(true) : setVisible(false));
  return (
    <div className='container flex j-between a-center main-padding '>
    <Link to="/">
    <div className='logo'>
        <img src={logo} alt="logo" />
    </div>
    </Link>
    <div className="toggle">
        {isNavOpen ? (
          <CloseIcon onClick={() => setIsNavOpen(false)} />
        ) : (
          <MenuIcon
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
    <ul className={`navLinks flex j-between a-center ${isNavOpen ? "show" : ""}`} >
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/ourworks">
        Our Works
        </NavLink>
        </li>
        <li>
        <NavLink to="/about">
        About
        </NavLink>
        </li>
    </ul>
    <button  className={`btn btnh flex j-between a-center ${isNavOpen ? "block" : ""}`}><Link to="/contactus">Contact us</Link></button>
    </div>
  )
}
