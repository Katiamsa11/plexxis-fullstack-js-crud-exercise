import React from 'react';
import "../Header/HeaderPage.scss";
import {Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png"

function HeaderPage() {
  return (
    <div className="header">
      <Link to="/" className="header__logo-link">
      <img  className = "header__logo" src={logo} alt= "plexxis logo"/>
      </Link>
      <h2 className='header__title'>Plexxis Employee Manager</h2>
      </div>
  )
}

export default HeaderPage;