import React from 'react';
import Hero from '../../components/Hero/Hero';
import Brand from '../../components/Brand/Brand';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="container home-brands">
        <Brand />
        <Brand />
        <Brand />
      </div>
    </div>
  );
}

export default Home;
