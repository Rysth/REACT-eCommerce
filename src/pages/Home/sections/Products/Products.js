import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProducts,
  fetchMoreProducts,
} from '../../../../redux/Products/ProductsSlice';
import Product from '../../../../components/Product/Product';
import Title from '../../../../components/Section/Title/Title';
import Subtitle from '../../../../components/Section/Subtitle/Subtitle';
import './Products.css';

function Products() {
  const dispatch = useDispatch();
  const { productsArray } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {}, [productsArray]);

  const handleViewMore = () => {
    dispatch(fetchMoreProducts());
  };

  return (
    <section className="products">
      <header className="products-header">
        <Subtitle text="Find your favourite smart watch." />
        <Title text="Our Latest Products" />
      </header>
      <div className="products-content">
        {productsArray.map((product) => (
          <Product
            key={product.id}
            imagePath={product.image}
            name={product.title}
            price={product.price}
            discount={(product.price * 0.15 + product.price).toFixed(2)}
          />
        ))}
      </div>
      <div className="products-actions">
        <button
          type="button"
          className="products-button"
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
    </section>
  );
}

export default Products;
