import React from 'react';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import './CartItem.css';
import { cartActions } from '../../../redux/Cart/CartSlice';

function CartItem({
  /* prettier-ignore */
  ID,
  imagePath,
  name,
  price,
  quantity,
}) {
  const dispatch = useDispatch();

  const handleItemIncrement = () => {
    dispatch(cartActions.incrementItemCounter(ID));
  };

  const handleItemDecrement = () => {
    dispatch(cartActions.decrementItemCounter(ID));
  };

  const handleItemRemoval = () => {
    dispatch(cartActions.removeItem(ID));
  };

  return (
    <div className="cart-item">
      <div className="cart-heading">
        <img className="cart-image" src={imagePath} alt="Hero" />
        <h3 className="cart-name">{name}</h3>
      </div>
      <div className="cart-body">
        <div className="cart-counter">
          <p className="cart-quantity">{quantity}</p>
          <div className="cart-actions">
            <button
              type="button"
              className="cart-button arrow "
              onClick={handleItemIncrement}
            >
              <i className="cart-button  icon fa-solid fa-chevron-up" />
            </button>
            <button
              type="button"
              className="cart-button arrow "
              onClick={handleItemDecrement}
            >
              <i className="cart-button icon fa-solid fa-chevron-down" />
            </button>
          </div>
        </div>
        <div className="cart-information">
          <p className="cart-subtotal">{`$${(price * quantity).toFixed(2)}`}</p>
          <button
            type="button"
            className="cart-button delete"
            onClick={handleItemRemoval}
          >
            <i className="cart-button icon fa-solid fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  ID: PropType.number.isRequired,
  imagePath: PropType.string.isRequired,
  name: PropType.string.isRequired,
  price: PropType.number.isRequired,
  quantity: PropType.number.isRequired,
};

export default CartItem;
