import React from 'react';
import './Detail.css';

function Detail() {
  return (
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
  );
}

export default Detail;
