import React from 'react';
import { person, like, heart  } from "../../assets/images";

export const Share = () => {
  return (
    <div className="shareWrapper py-2">
        <img src={person} alt="person"/>
        <img src={heart} alt="heart"/>
        <p>4k</p>
        <img src={like} alt="like"/>
        <p>3.2k</p>
    </div>
  )
}