import React from 'react';
import ImagePreview from '../../assets/images/products/product-4.png';
import './Preview.css';

function Preview() {
  return (
    <div className="preview">
      <div className="preview-content container">
        <picture className="preview-picture">
          <img className="preview-image" src={ImagePreview} alt="" />
        </picture>
        <div className="preview-body">
          <header className="preview-header">
            <button type="button" className="preview-button back">
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
          <button type="button" className="preview-button cart">
            <i className="cart-button icon fa-solid fa-shopping-cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
