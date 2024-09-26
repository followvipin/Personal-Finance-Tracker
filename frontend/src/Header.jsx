import React, { useState } from "react";
import "./Header.css"; // CSS file for styling the header

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className="header">
      <div className="logo">Financlo</div>
      <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">Register</a>
          </li>
          <li className="nav__item">
            <a href="#home" className="nav__link">Login</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">Donate</a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">Careers</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">About</a>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-toggle__bar"></span>
        <span className="menu-toggle__bar"></span>
        <span className="menu-toggle__bar"></span>
      </div>
    </header>
    </>
  );
};

export default Header;
