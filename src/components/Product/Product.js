import React from 'react';
import PropType from 'prop-types';
import './Product.css';

function Product(
  /* prettier-ignore */
  {
    imagePath,
    name,
    price,
    discount,
  },
) {
  return (
    <div className="product">
      <div className="product-header">
        <img src={imagePath} alt="" className="product-image" />
      </div>
      <div className="product-body">
        <h3 className="product-name">{name}</h3>
        <div className="product-rating">
          <i className="product-rate fa-solid fa-star" />
          <i className="product-rate fa-solid fa-star" />
          <i className="product-rate fa-solid fa-star" />
          <i className="product-rate fa-solid fa-star" />
          <i className="product-rate fa-solid fa-star" />
        </div>
        <div className="product-data">
          <p className="product-discount">{price}</p>
          <h4 className="product-price">{discount}</h4>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  imagePath: PropType.string.isRequired,
  name: PropType.string.isRequired,
  price: PropType.string.isRequired,
  discount: PropType.string.isRequired,
};

export default Product;
