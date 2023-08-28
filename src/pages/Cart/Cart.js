import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/Cart/Item/CartItem';
import './Cart.css';

function Cart() {
  const navigator = useNavigate();
  const { cartItems } = useSelector((store) => store.cart);
  const handleNavigation = () => {
    navigator('/');
  };

  useEffect(() => {}, [cartItems]);

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
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  ID={item.id}
                  imagePath={item.image}
                  name={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="cart-right">
          <form className="form">
            <h2 className="form-title">Details</h2>
            <div className="form-group cart">
              <label htmlFor="name" className="form-label cart">
                Full Name:
                <input
                  className="form-input cart"
                  type="text"
                  placeholder="Your full name..."
                  name="name"
                  id="name"
                  required
                />
              </label>
            </div>
            <div className="form-group cart">
              <label htmlFor="email" className="form-label cart">
                Email:
                <input
                  className="form-input cart"
                  type="email"
                  placeholder="Your email..."
                  name="email"
                  id="email"
                  required
                />
              </label>
            </div>
            <div className="form-group cart">
              <label htmlFor="phone" className="form-label cart">
                Phone number:
                <input
                  className="form-input cart"
                  type="tel"
                  placeholder="Your phone number..."
                  name="phone"
                  id="phone"
                  required
                />
              </label>
            </div>
            <hr className="cart-separator" />
            <div className="form-group cart">
              <div className="cart-preview">
                <div className="cart-amount">
                  Subtotal
                  <span className="cart-number">$1,000</span>
                </div>
                <div className="cart-amount">
                  Taxes
                  <span className="cart-number">$120</span>
                </div>
                <div className="cart-amount fw-bold">
                  Total
                  <span className="cart-number fw-bold">$1,120</span>
                </div>
              </div>
            </div>
            <div className="form-group cart">
              <button className="form-button cart" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
