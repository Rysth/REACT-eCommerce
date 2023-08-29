import React from 'react';
import PropTypes from 'prop-types';
import './Brand.css';

function Brand({ imagePath, brand, text }) {
  return (
    <div className="brand">
      <div className="brand-header">
        <img className="brand-image" src={imagePath} alt={brand} />
      </div>
      <div className="brand-body">
        <h3 className="brand-name">{brand}</h3>
        <p className="brand-text">{text}</p>
      </div>
    </div>
  );
}

Brand.propTypes = {
  imagePath: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Brand;
