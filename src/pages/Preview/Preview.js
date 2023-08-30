import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSingleProduct, cartActions } from '../../redux/Cart/CartSlice';
import { fetchProductByID } from '../../redux/Products/ProductsSlice';
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

  const { productSelected } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProductByID(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="preview">
      <div className="preview-content container">
        <picture className="preview-picture">
          <img
            className="preview-image"
            src={productSelected && productSelected.image}
            alt=""
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
            <h2 className="preview-text title">
              {productSelected && productSelected.title}
            </h2>
          </header>
          <p className="preview-text parragraph">
            {productSelected && productSelected.description}
          </p>
          <h3 className="preview-text subtitle">Categories:</h3>
          <div className="preview-system">
            <p className="preview-text category">
              {productSelected && productSelected.category}
            </p>
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
