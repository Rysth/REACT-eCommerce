import React from 'react';
import PropType from 'prop-types';
import './CartItem.css';

function CartItem({ imagePath, name, price }) {
  return (
    <div className="cart-item">
      <div className="cart-heading">
        <img className="cart-image" src={imagePath} alt="Hero" />
        <h3 className="cart-name">{name}</h3>
      </div>
      <div className="cart-body">
        <div className="cart-counter">
          <p className="cart-quantity">1</p>
          <div className="cart-actions">
            <button type="button" className="cart-button arrow ">
              <i className="cart-button  icon fa-solid fa-chevron-up" />
            </button>
            <button type="button" className="cart-button arrow ">
              <i className="cart-button icon fa-solid fa-chevron-down" />
            </button>
          </div>
        </div>
        <div className="cart-information">
          <p className="cart-subtotal">{`$${price}`}</p>
          <button type="button" className="cart-button delete">
            <i className="cart-button icon fa-solid fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  imagePath: PropType.string.isRequired,
  name: PropType.string.isRequired,
  price: PropType.number.isRequired,
};

export default CartItem;
