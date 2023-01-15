import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./team.css"
import "./team.css"
export default function Team() {
const [team, setTeam] = useState([])
  useEffect(() => {
    const getTeam = async() => {
      try {
        const res = await axios.get("/api/team-member/all/")
        setTeam(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getTeam()
  }, [])

  return (
    <div className='teamContainer main-padding'>
    <div className='subHeader'>Our Great Team</div>
    <div className='subTitleHeader'>Meet our professional team who will help you</div>
          <div className='teamBoxes flex a-center j-center gap-half'>
      {
        team.map((team) => (
            <div className={`teamBox`} key={team.id}>
            <div className={`teamBoxImage ${team.title}`}>
              <img src={team.image} alt="team" className='teamBoxImg' />
            </div>
              <h4>{team.name}</h4>
              <p>{team.title}</p>
            </div>
        ))
      }
          </div>
    </div>
  )
}
