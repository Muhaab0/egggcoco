import React from 'react'
import "./aboutUsContent.css"
import Vector from "../../assets/ContentVector.png"
export default function AboutusContent() {
  return (
    <div className='aboutContentContainer main-padding'>
        <div className='aboutContentBox'>
            <img src={Vector} alt="vector" className='ContenVector' />
            <h2>Get to know more about us</h2>
            <p>We are an agency engaged in the creative industry and business, we are ready to help you to improve your business performance together with our great team</p>
        </div>
    </div>
  )
}
