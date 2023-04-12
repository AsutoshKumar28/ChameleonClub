import React from 'react'
import "./Navigation.css"
import Logo from "../videos/Logo.mp4"
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
    {/* --------------------------------------------logo ---------------------------------------------------*/}
    <video className='logo' autoPlay loop muted>
    <source src={Logo} type="video/mp4" className="imge1" />
    </video>
    
    {/*------------------------------------------ menu----------------------------------------------------- */}
    <div className="menu">
      <ul className='menu_items'>
        <li className='menu-list'>
          <NavLink to="/" className="nav-menu">Home</NavLink>
        </li>
        <li className='menu-list'>
          <NavLink to="/about">Discover</NavLink>
        </li>
        <li className='menu-list'>
          <NavLink to="/services">Chats</NavLink>
        </li>
        <li className='menu-list'>
          <NavLink to="/shop">OurStory</NavLink>
        </li>
      </ul>
    </div>     
  </nav>
);
};

export default Navigation