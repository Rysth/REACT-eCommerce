import React from 'react';
import { useDispatch } from 'react-redux';
import ImageZoom from 'react-image-zooom';
import { NotificationManager } from 'react-notifications';
import { useNavigate, useParams } from 'react-router-dom';
import ImagePreview from '../../assets/images/products/product-3.png';
import { fetchSingleProduct, cartActions } from '../../redux/Cart/CartSlice';
import './Preview.css';

function Preview() {
  const navigator = useNavigate();
  const handleNavigation = () => {
    navigator('/');
  };

  const params = useParams();
  const dispatch = useDispatch();
  const handleCartItems = () => {
    dispatch(fetchSingleProduct(params.id));
    dispatch(cartActions.incrementCounter());
    NotificationManager.success('Product Added', 'Successfull', 1000);
  };
  return (
    <div className="preview">
      <div className="preview-content container">
        <picture className="preview-picture">
          <ImageZoom
            className="preview-image"
            src={ImagePreview}
            alt="Product preview"
            zoom="200"
          />
        </picture>
        <div className="preview-body">
          <header className="preview-header">
            <button
              type="button"
              className="preview-button back"
              onClick={handleNavigation}
            >
              <i className="cart-button icon fa-solid fa-chevron-left" />
              Back
            </button>
            <hr className="preview-separator" />
            <h2 className="preview-text title">Apple Watch III</h2>
          </header>
          <p className="preview-text parragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sequi
            voluptatum commodi deleniti et similique atque earum delectus sed
            inventore, reprehenderit aliquid illo cum eligendi praesentium
            tempora neque. Illum, quaerat!
          </p>
          <h3 className="preview-text subtitle">Categories:</h3>
          <div className="preview-system">
            <p className="preview-text category">Watches</p>
            <p className="preview-text category">Apple</p>
            <p className="preview-text category">Technology</p>
          </div>
          <button
            type="button"
            className="preview-button cart"
            onClick={handleCartItems}
          >
            <i className="cart-button icon fa-solid fa-shopping-cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
