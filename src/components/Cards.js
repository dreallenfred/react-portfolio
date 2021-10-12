import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import image1 from '../images/nsbe.jpg';
// import image2 from '../images/kitty.JPG';
import image3 from '../images/profile.JPEG';
import image4 from '../images/winter.JPG';
// import image5 from '../images/suave.JPG';
import image6 from '../images/camera.JPG'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* <CardItem
              src={image1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            /> */}
            <CardItem
              src={image3}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image6}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={image4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            {/* <CardItem
              src={image5}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;