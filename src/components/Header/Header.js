import React, { useEffect, useState } from 'react';
import NavLink from '../NavLink/NavLink';
import './Header.css';

const linkArray = [
  {
    ID: 'link-1',
    text: 'Home',
    classData: 'header-link',
    path: '/',
  },
  {
    ID: 'link-2',
    text: 'Brands',
    classData: 'header-link',
    path: '/',
  },
  {
    ID: 'link-3',
    text: 'Products',
    classData: 'header-link',
    path: '/',
  },
  {
    ID: 'link-4',
    text: 'Contact',
    classData: 'header-link',
    path: '/',
  },
  {
    ID: 'link-5',
    text: 'About',
    classData: 'header-link',
    path: '/',
  },
];

function Header() {
  /* Handle de Mobile Menu */
  const [open, setOpen] = useState(false);
  const handleMobileMenu = () => setOpen((prevOpen) => !prevOpen);
  const handleMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    if (!open) document.body.style.overflow = 'unset';
  }, [open]);

  return (
    <div className="header">
      <div className="container">
        <header className="header-upper d-flex">
          <i className="header-icon fa-solid fa-stopwatch" />
          <h1 className="header-title">SmartCommerce</h1>
        </header>
        <div className="header-middle">
          <button
            className="header-button toggle"
            type="button"
            onClick={handleMobileMenu}
          >
            <i
              className={
                open ? 'fa-solid fa-close color-white' : 'fa-solid fa-bars'
              }
            />
          </button>
          <nav className={open ? 'header-nav d-flex' : 'header-nav d-none'}>
            {linkArray.map((item) => (
              <NavLink
                key={item.ID}
                text={item.text}
                classData={item.classData}
                path={item.path}
                handleData={handleMenu}
              />
            ))}
          </nav>
        </div>
        <div className="header-lower">
          <button className="header-button cart" type="button">
            <i className="fa-solid fa-shopping-cart" />
          </button>
          <button className="header-button cart" type="button">
            <i className="fa-solid fa-user" />
          </button>
          <button className="header-button cart" type="button">
            <i className="fa-solid fa-search" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
