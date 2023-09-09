import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content container">
        <p className="footer-text parragraph">Created by</p>
        <a className="footer-text anchor" href="https://github.com/Rysth">
          <i className="fa-brands fa-github" />
          RysthCraft
        </a>
      </div>
    </div>
  );
}

export default Footer;
