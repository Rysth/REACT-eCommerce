import React from 'react';
import Product from '../../components/Product/Product';
import productsArray from './Data/Information';
import './Products.css';

function Products() {
  return (
    <section className="products">
      <header className="products-header">
        <p className="products-subtitle">Find your favourite smart watch</p>
        <h2 className="products-title">Our Lastest Products</h2>
      </header>
      <div className="products-content">
        {productsArray.map((product) => (
          <Product
            key={product.ID}
            imagePath={product.imagePath}
            name={product.name}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
