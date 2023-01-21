import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./latestProjects.css"

export default function LatestProjects() {
  const [project, setProjects] = useState([])
  useEffect(() => {
    const getProjects = async() => {
      try {
        const res = await axios.get("/api/previous-work/all/")
        setProjects(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getProjects()
  }, [])



  return (
    <div className='projectsContainer main-padding'>
    <h6 className='subHeader'>Our Latest Project</h6>
    <h2 className='subTitleHeader'>This is the last variety of projects we have worked on</h2>
    {project.map((proj)=>(
        <div className={`projectBox ${proj.color}  flex`} key={proj.color}>
            <div className='projectBoxContainer'>
            <div className='projectBoxTitle'>{[proj.name]}</div>
            <hr className='projectBoxHr'/>
            <div className='projectBoxDescription'>{[proj.description]}</div>
            </div>
            <div className='projectBoxImg'>
                <img src={`${proj.image}`} alt="projectImg" />
            </div>
        </div>
    ))}

    </div>
  )
}
