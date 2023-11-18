import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown, FaInstagram, FaOpencart } from "react-icons/fa6";


import logo from "../assets/brand/logo.png";
import notification from '../assets/team-bg.jpg'

function navbar() {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="left-nav">
            <div className="nav-grid"><span><CiGrid41/></span></div>
            <div className="nav-brand"><img src={logo} alt="" /></div>
            <div className="nav-links">about</div>
            <div className="nav-links">services</div>
            <div className="nav-links">portfolio</div>
            <div className="nav-links">blog</div>
            <div className="nav-links">contact</div>
          </div>
          <div className="right-nav">
            <div className="nav-icon nav-cart"><FaOpencart/></div>
            <div className="nav-icon insta-icon"><FaInstagram/><span className="insta-count">33k</span></div>
            <div className="nav-icon search-icon"><FaSearch/></div>
            <div className="nav-date hrow">
              <div className="nav-day">27</div>
              <div className="vrow">
                <div className="nav-month">nov</div>
                <div className="nav-year">2023</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-notification">
          <div className="notification-content hrow">
            <span className="notification-category">gadget</span>
            <div className="notification-message hrow">
              <span className="notification-icon"><img src={notification} alt="" /></span>
              <span className="notification-text">headsets are better when you're playing video game</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default navbar;
