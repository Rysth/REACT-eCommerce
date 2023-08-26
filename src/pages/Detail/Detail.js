import React from 'react';
import HeroImage from '../../assets/images/hero.png';
import './Detail.css';

function Detail() {
  return (
    <div className="detail">
      <div className="detail-content container">
        <div className="detail-header">
          <img className="detail-image" src={HeroImage} alt="" />
        </div>
        <div className="detail-sidebar">
          <h3 className="detail-name">Apple Watch I</h3>
          <h4 className="detail-price">$300.00</h4>
          <p className="detail-description">
            Collection of 4 wireframe products that a full range of prototyping
            tasks. Includes and iOS Wireframes, Web and Mobile Flowcharts.
          </p>
          <div className="detail-actions">
            <button type="button" className="detail-button whatsapp">
              <i className="detail-icon fa-brands fa-whatsapp" />
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
