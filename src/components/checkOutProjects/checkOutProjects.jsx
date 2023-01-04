import React from 'react'
import CheckProjectImg from "../../assets/CheckOutProjects.png"
import Vector from "../../assets/ProjectVector.png"
import "./checkOutProjects.css"

export default function CheckOutProjects() {
  return (
    <div className='checkOutProjctsContainer main-padding'>
    <div className='checkOutProjectgrid'>
        <div className='subTitleHeader'>Check out some Of our amazing projects!</div>
        <img src={CheckProjectImg} alt="projectImg" className='checkOutProjectImg' />
        <div className='ProjectVector'>
            <img src={Vector} alt="vector" />
        </div>
    </div>
    </div>
  )
}
