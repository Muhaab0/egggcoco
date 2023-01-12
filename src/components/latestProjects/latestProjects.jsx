import React from 'react'
import projects from '../utilis/Projects'
import "./latestProjects.css"

export default function LatestProjects() {
  return (
    <div className='projectsContainer main-padding'>
    <h6 className='subHeader'>Our Latest Project</h6>
    <h2 className='subTitleHeader'>This is the last variety of projects we have worked on</h2>
    {projects.map((proj)=>(
        <div className={`projectBox ${proj.color}  flex`} key={proj.title}>
            <div className='projectBoxContainer'>
            <div className='projectBoxTitle'>{[proj.title]}</div>
            <hr className='projectBoxHr'/>
            <div className='projectBoxDescription'>{[proj.description]}</div>
            </div>
            <div className='projectBoxImg'>
                <img src={require(`../../assets/${proj.img}`)} alt="projectImg" />
            </div>
        </div>
    ))}

    </div>
  )
}
