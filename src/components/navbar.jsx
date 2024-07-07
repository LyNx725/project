import React, { useEffect, useState } from 'react';
import './navbar.css';

function NavBar() {
  const [activeLink, setActiveLink] = useState('/');

  const navigateTo = (path) => {
    setActiveLink(path);
    window.location.pathname = path;
  };
useEffect(()=>{
  setActiveLink(window.location.pathname);
});
  return (
    <div className="navbar">
      <div className="logo"></div>
      <h3 
        className={activeLink === '/' ? 'active' : ''} 
        onClick={() => navigateTo('/')}
      >
        HOME
      </h3>
      <h3 
        className={activeLink === '/add-product' ? 'active' : ''} 
        onClick={() => navigateTo('/add-product')}
      >
        ADD PRODUCT
      </h3>
      <div className="login-button-container">
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default NavBar;