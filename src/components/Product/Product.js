import React from 'react';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
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
    dispatch(fetchSingleProduct(ID)).then(
      dispatch(cartActions.incrementCounter()),
    );
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
  ID: PropType.number.isRequired,
  imagePath: PropType.string.isRequired,
  name: PropType.string.isRequired,
  price: PropType.number.isRequired,
  discount: PropType.string.isRequired,
};

export default Product;
