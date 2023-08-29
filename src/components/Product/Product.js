import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../../redux/Cart/CartSlice';
import './Product.css';

function Product(
  /* prettier-ignore */
  {
    ID,
    imagePath,
    name,
    price,
    discount,
  },
) {
  const dispatch = useDispatch();
  const handleCartItems = () => {
    dispatch(fetchSingleProduct(ID));
  };

  return (
    <div className="product">
      <div className="product-header">
        <img loading="lazy" src={imagePath} alt="" className="product-image" />
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
          <p className="product-discount">{`$${discount}`}</p>
          <h4 className="product-price">{`$${price}`}</h4>
        </div>
      </div>
      <div className="product-actions">
        <button
          type="button"
          className="product-button"
          onClick={handleCartItems}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  ID: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.string.isRequired,
};

export default Product;
