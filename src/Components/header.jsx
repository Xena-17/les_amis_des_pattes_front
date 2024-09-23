import React from 'react';
import './header.css'; 
import Logo from '../assets/images/Logo.png'


const Header = () => {
  return <>
  <Header>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <div className="logo" id="root">
        <a href="/">
          <img
            src={Logo} 
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
  </Header>
    </>;
}

export default Header;
