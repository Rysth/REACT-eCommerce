import React from 'react';
import './Hero.css';
import Search from '../../components/Form/Search/Search';
import HeroImage from '../../assets/images/hero.png';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-left">
          <h2 className="hero-title">Discover Most Suitable Watches</h2>
          <p className="hero-text">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <Search />
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="Hero watch" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
