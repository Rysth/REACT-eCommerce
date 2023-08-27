import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import HeroImage from '../../assets/images/hero.png';

function Cart() {
  const navigator = useNavigate();
  const handleNavigation = () => {
    navigator('/');
  };
  return (
    <div className="cart">
      <div className="cart-content container">
        <div className="cart-left">
          <div className="cart-options">
            <button
              type="button"
              className="cart-button return"
              onClick={handleNavigation}
            >
              <i className="cart-button icon fa-solid fa-chevron-left" />
              Continue Shopping
            </button>
          </div>
          <hr className="cart-separator" />
          <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            <p className="cart-subtitle">You have 3 items in your cart</p>
            <div className="cart-layout">
              <CartItem HeroImage={HeroImage} />
              <CartItem HeroImage={HeroImage} />
              <CartItem HeroImage={HeroImage} />
              <CartItem HeroImage={HeroImage} />
              <CartItem HeroImage={HeroImage} />
              <CartItem HeroImage={HeroImage} />
              <CartItem HeroImage={HeroImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

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
