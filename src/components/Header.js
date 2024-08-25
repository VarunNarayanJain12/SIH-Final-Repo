
import React from 'react';
import ayushLogo from '../images/image-Photoroom.png';

function Header() {
  return (
    <header className="header">
      <div className="ayushlogo">
        <img src={ayushLogo} alt="AYUSH logo" className="ayushLogo" />
      </div>
      <nav className="headerButtons">
        <a href="#home">Home</a>
        <a href="#service">Service</a>
        <a href="#about">About</a>
        <button className="material-symbols-rounded">person</button>
      </nav>
    </header>
  );
}

export default Header;