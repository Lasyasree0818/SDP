import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
   
      <h1>Health is Wealth</h1>
      <p>Proper diagnosis of disease is needed in current society</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--contained'
          buttonSize='btn--large'
        >
         Login
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;