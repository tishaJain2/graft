import React from 'react';
import TinderCard from 'react-tinder-card';
import { image1 } from "../../assets/images";

export const Cards = (props) => {

  const swiped = (direction) => {
    props.history.push('/second')
  }

  return (
    <div className="cardUpperContainer" style={{height: (window.innerHeight-145)}}>
        <div className='cardContainer'>
            <TinderCard className='swipe' onSwipe={(dir) => swiped(dir)}>
                <div style={{ background: 'linear-gradient(0deg, #a837b35e, #a837b35e), url(' + image1 + ')' }} className='card' ></div>
                <span className="overlayText">SWIPE TO LOVE</span>
                <i className="ml-1 fas fa-arrow-left fa-3x overlayIcon"></i>
            </TinderCard>
        </div>
    </div>
  )
}