import React from 'react';
import { useNavigate } from 'react-router-dom';

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
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
