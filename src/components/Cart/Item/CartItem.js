import React from 'react';
import HeroImage from '../../../assets/images/hero.png';
import './CartItem.css';

function CartItem() {
  return (
    <div className="cart-item">
      <div className="cart-heading">
        <img className="cart-image" src={HeroImage} alt="Hero" />
        <h3 className="cart-name">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
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
          <p className="cart-subtotal">$600</p>
          <button type="button" className="cart-button delete">
            <i className="cart-button icon fa-solid fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
