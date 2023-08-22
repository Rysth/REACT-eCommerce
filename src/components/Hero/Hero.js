import React from 'react';
import './Hero.css';
import HeroImage from '../../assets/images/hero.png';

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-left">
          <h2 className="hero-title">Discover Most Suitable Watches</h2>
          <p className="hero-text">
            Find the best, reliable, and cheap smart watches here. We focus on product quality. Here
            you can find smart watches of almost all brands. So why you are waiting? Just order now!
          </p>
          <form action="" className="form">
            <div className="form-group">
              <label htmlFor="searchBar" className="form-label search">
                <input className="form-input" type="text" placeholder="Find the best brands" />
                <button className="form-button" type="button">
                  Search
                </button>
              </label>
            </div>
          </form>
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="Hero watch" className="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
