import React, { useState } from 'react';
import './Header.css';

function Header() {
  /* Handle de Mobile Menu */
  const [open, setOpen] = useState(false);
  const handleMobileMenu = () => setOpen((prevOpen) => !prevOpen);

  return (
    <div className="header">
      <div className="container">
        <header className="header-upper d-flex">
          <i className="header-icon fa-solid fa-stopwatch" />
          <h1 className="header-title">SmartCommerce</h1>
        </header>
        <div className="header-middle">
          <button className="header-button" type="button" onClick={handleMobileMenu}>
            <i className={open ? 'fa-solid fa-close color-white' : 'fa-solid fa-bars'} />
          </button>
          <nav className={open ? 'header-nav d-flex' : 'header-nav d-none'}>
            <a className="header-link" href="/">
              Home
            </a>
            <a className="header-link" href="/">
              Brands
            </a>
            <a className="header-link" href="/">
              Products
            </a>
            <a className="header-link" href="/">
              Contact
            </a>
            <a className="header-link" href="/">
              About
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
