import React from 'react';
import Carousel from 'react-multi-carousel';
import Hero from '../../components/Hero/Hero';
import Brand from '../../components/Brand/Brand';
import brandsArray from '../../components/Brand/BrandImages';
import Products from '../../components/Products/Products';
import 'react-multi-carousel/lib/styles.css';
import './Home.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="container">
        <Carousel
          containerClass="home-brands"
          responsive={responsive}
          infinite
          swipeable
          autoPlay
        >
          {brandsArray.map((item) => (
            <Brand
              key={item.ID}
              imagePath={item.imagePath}
              brand={item.brand}
              text={item.text}
            />
          ))}
        </Carousel>
        <Products />
      </div>
    </div>
  );
}

export default Home;
