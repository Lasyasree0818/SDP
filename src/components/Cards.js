import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>choose your option</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Symptoms of your health issues'
              
              path='/Services'
            />
            <CardItem
              src='images/image4.jpg'
              text='choose your referred doctor'
            
              path='/Services'
            />
             <CardItem
              src='images/image3.jpg'
              text='Related disease based on symptoms'
           
              path='/Services'
            />
             <CardItem
              src='images/image2.jpg'
              text='Nutrition diets that shouldbe followed'
          
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
           
           
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;