import React, { useState } from 'react'
import img from '../../assets/Group 10108.png'
import "./hero.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Vector from "../../assets/HomeVector.png"
import CloseIcon from '@mui/icons-material/Close';



export default function Hero() {

  return (
    <div className='heroContainer main-padding flex a-center j-between'>
        <div className="heroText">

        <div className='heroImage'>
        <img src={img} alt="img" />
        </div>
            <h2>Make your business <span>more powerfull</span>
            <br/>
            with us 
                </h2>

                <div className="heroSubText">
                    <p>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
                </div>

                <button className='heroBtn btnh flex a-center '>
                <p>
                Get Started
                </p>
                <ArrowRightAltIcon className='heroArrow'/> 
                </button>
        </div>

          
    <div className='HomeVector'>
      <img src={Vector} alt="vector" />
    </div>
    </div>
  )
}
