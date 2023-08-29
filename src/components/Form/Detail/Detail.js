import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { cartActions } from '../../../redux/Cart/CartSlice';
import './Detail.css';

function Detail() {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const { cartSubtotal, cartItems } = useSelector((store) => store.cart);

  const calculateTaxes = useMemo(
    () => (0.12 * parseFloat(cartSubtotal)).toFixed(2),
    [cartSubtotal],
  );

  const calculateTotal = useMemo(
    () => (parseFloat(calculateTaxes) + parseFloat(cartSubtotal)).toFixed(2),
    [calculateTaxes, cartSubtotal],
  );

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    NotificationManager.success('Email Sent', 'Successfull', 2000);
    form.reset();
  };

  useEffect(() => {
    if (cartItems.length === 0) setDisable(true);
    dispatch(cartActions.calculateAllSubtotal());
  }, [cartItems, dispatch]);

  return (
    <form
      className={disable ? 'form disabled' : 'form'}
      onSubmit={handleSubmitForm}
    >
      <h2 className="form-title">Details</h2>
      <fieldset className="form-group cart" disabled={disable}>
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
      </fieldset>
      <fieldset className="form-group cart" disabled={disable}>
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
      </fieldset>
      <fieldset className="form-group cart" disabled={disable}>
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
      </fieldset>
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
      <fieldset className="form-group cart" disabled={disable}>
        <button className="form-button cart" type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default Detail;
