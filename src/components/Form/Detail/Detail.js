import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../redux/Cart/CartSlice';
import './Detail.css';

function Detail() {
  const dispatch = useDispatch();
  const { cartSubtotal, cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(cartActions.calculateAllSubtotal());
  }, [cartItems, dispatch]);

  const calculateTaxes = useMemo(
    () => (0.12 * parseFloat(cartSubtotal)).toFixed(2),
    [cartSubtotal],
  );

  const calculateTotal = useMemo(
    () => (parseFloat(calculateTaxes) + parseFloat(cartSubtotal)).toFixed(2),
    [calculateTaxes, cartSubtotal],
  );

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
            <span className="cart-number">{`$${cartSubtotal}`}</span>
          </div>
          <div className="cart-amount">
            Taxes
            <span className="cart-number">{`$${calculateTaxes}`}</span>
          </div>
          <div className="cart-amount fw-bold">
            Total
            <span className="cart-number fw-bold">{`$${calculateTotal}`}</span>
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
