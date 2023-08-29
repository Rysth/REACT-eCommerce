import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    text: 'Cart',
    classData: 'header-link',
    path: '/cart',
  },
  // ... (other links)
];

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigator = useNavigate();
  const { cartCounter } = useSelector((store) => store.cart);

  const handleMobileMenu = () => {
    setMobileMenuOpen((prevOpen) => !prevOpen);
  };

  const handleNavigator = (path) => {
    navigator(path);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <div className="header">
      <div className="container">
        <button
          type="button"
          className="header-upper d-flex"
          onClick={() => handleNavigator('/')}
        >
          <i className="header-icon fa-solid fa-stopwatch" />
          <h1 className="header-title">SmartCommerce</h1>
        </button>
        <div className="header-middle">
          <button
            className="header-button toggle"
            type="button"
            onClick={handleMobileMenu}
          >
            <i
              className={`fa-solid ${
                isMobileMenuOpen ? 'fa-close' : 'fa-bars'
              } color-white`}
            />
          </button>
          <nav
            className={`header-nav ${isMobileMenuOpen ? 'd-flex' : 'd-none'}`}
          >
            {linkArray.map((item) => (
              <NavLink
                key={item.ID}
                text={item.text}
                classData={item.classData}
                path={item.path}
                handleData={() => setMobileMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
        <div className="header-lower">
          <button
            className="header-button cart"
            type="button"
            onClick={() => handleNavigator('/cart')}
          >
            <i className="fa-solid fa-shopping-cart" />
            <span className="header-cart counter">{cartCounter}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
