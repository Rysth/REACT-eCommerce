import React from 'react';
import Carousel from 'react-multi-carousel';
import Brand from '../../components/Brand/Brand';
import brandsArray from './Data/Information';
import 'react-multi-carousel/lib/styles.css';
import './Brands.css';

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

function Brands() {
  return (
    <section className="home-brands">
      <Carousel responsive={responsive} infinite swipeable autoPlay>
        {brandsArray.map((item) => (
          <Brand
            key={item.ID}
            imagePath={item.imagePath}
            brand={item.brand}
            text={item.text}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default Brands;
