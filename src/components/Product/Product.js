import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { fetchSingleProduct, cartActions } from '../../redux/Cart/CartSlice';
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
    dispatch(cartActions.incrementCounter());
    NotificationManager.success('Product Added', 'Successfull', 1000);
  };

  const navigator = useNavigate();
  const handleNavigation = () => {
    navigator(`/preview/${ID}`);
  };

  return (
    <div className="product">
      <button
        type="button"
        className="product-header"
        onClick={handleNavigation}
      >
        <img loading="lazy" src={imagePath} alt="" className="product-image" />
      </button>
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
