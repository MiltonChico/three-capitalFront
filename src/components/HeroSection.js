import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img
                            src={process.env.PUBLIC_URL + "/images/home-background.jpeg"}
                            alt="example"
                        />
      <h1>Let's work together</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Connect Wallet
        </Button>
        <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;