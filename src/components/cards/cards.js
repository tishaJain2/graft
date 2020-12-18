import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import { image1, image2, image3, pound } from "../../assets/images";
import { Share } from "../share";

const db = [
  {
    url: image3,
    text: "SWIPE TO SKIP",
    icon: "fa-arrow-up",
    preventSwipe: ["right", "left", "down"],
    textClass: "overlayTextThirdImg",
    iconClass: "overlayIconThirdImg",
    name: "image3",
    isPoundVisble: false,
    isShareVisible: true
  },
  {
    url: image2,
    text: "SWIPE TO LIKE",
    icon: "fa-arrow-right",
    preventSwipe: ["left", "up", "down"],
    textClass: "overlayText",
    iconClass: "overlayIcon",
    name: "image2",
    isPoundVisble: true,
    isShareVisible: true
  },
  {
    url: image1,
    text: "SWIPE TO LOVE",
    icon: "fa-arrow-left",
    preventSwipe: ["right", "up", "down"],
    textClass: "overlayText",
    iconClass: "overlayIcon",
    name: "image1",
    isPoundVisble: false,
    isShareVisible: false
  },
]

export const Cards = () => {
  const images = db
  const [backgroundClr, setBackgroundClr] = useState("#ffffff")

  const swiped = (direction, name) => {
    if(name === "image3") {
      setBackgroundClr("#ccc")
    }
  }

  return (
    <div className="cardUpperContainer" style={{height: (window.innerHeight-145), background: backgroundClr}}>
        <div className='cardContainer'>
          {images.map((image, index) => 
            <TinderCard className='swipe' key={index} onCardLeftScreen={(dir) => swiped(dir, image.name)} preventSwipe={image.preventSwipe}>
              <div style={{ background: 'linear-gradient(0deg, #a837b35e, #a837b35e), url(' + image.url + ')' }} className='card' ></div>
              <span className={image.textClass}>{image.text}</span>
              <i className={`${image.icon} ml-1 fas fa-3x ${image.iconClass}`}></i>
              {image.isPoundVisble ? <img className="poundImg" src={pound} alt="$"/>: null}
              {image.isShareVisible ? <Share /> : null}
            </TinderCard>
          )}
        </div>
    </div>
  )
}