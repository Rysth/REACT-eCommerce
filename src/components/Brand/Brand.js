import React from 'react';
import PropType from 'prop-types';
import './Brand.css';

function Brand({ imagePath, brand, text }) {
  return (
    <div className="brand">
      <div className="brand-header">
        <img className="brand-image" src={imagePath} alt="" />
      </div>
      <div className="brand-body">
        <h3 className="brand-name">{brand}</h3>
        <p className="brand-text">{text}</p>
      </div>
    </div>
  );
}

Brand.propTypes = {
  imagePath: PropType.string.isRequired,
  brand: PropType.string.isRequired,
  text: PropType.string.isRequired,
};

export default Brand;
