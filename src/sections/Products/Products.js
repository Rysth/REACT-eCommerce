import React from 'react';
import Product from '../../components/Product/Product';
import productsArray from './Data/Information';
import Title from '../../components/Section/Title/Title';
import Subtitle from '../../components/Section/Subtitle/Subtitle';
import './Products.css';

function Products() {
  return (
    <section className="products">
      <header className="products-header">
        <Subtitle text="Find your favourite smart watch." />
        <Title text="Our Latest Products" />
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
