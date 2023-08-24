import React from 'react';
import BrandImage from '../../assets/images/brands/preview-1.png';
import './Brand.css';

function Brand() {
  return (
    <div className="brand">
      <div className="brand-header">
        <img className="brand-image" src={BrandImage} alt="" />
      </div>
      <div className="brand-body">
        <h3 className="brand-name">Apple</h3>
        <p className="brand-text">
          Apple is one of the most famous smart watches providing company.
        </p>
      </div>
    </div>
  );
}

export default Brand;
