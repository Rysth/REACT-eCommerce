import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Detail from '../../components/Form/Detail/Detail';
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
          <Detail />
        </div>
      </div>
    </div>
  );
}

export default Cart;
