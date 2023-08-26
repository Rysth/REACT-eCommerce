import React from 'react';
import Hero from './sections/Hero/Hero';
import Brands from './sections/Brands/Brands';
import Products from './sections/Products/Products';

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="container">
        <Brands />
        <Products />
      </div>
    </div>
  );
}

export default Home;
