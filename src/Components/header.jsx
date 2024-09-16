import React from 'react';
import './header.css'; 
import logo from '../assets/images/Logo.png';


const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img
            src={logo} 
            alt="logo les amis des pattes avec un chat à l'intérieur d'un chien"
            className="logo-image"
          />
        </a>
      </div>
      <div>
        <h1>Les Amis Des Pattes</h1>
      </div>
      <div className="header_link">
        <span className="material-icons" id="account_circle">
          account_circle
        </span>
      </div>
    </header>
  );
}

export default Header;
