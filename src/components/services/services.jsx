import React, { useEffect, useState } from 'react'
import './services.css'
import servicesBox from "../utilis/service"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Vector from "../../assets/HomeVector.png"
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

export default function Services() {
  const [serviceBox, setServicesBox] = useState([]);
  const [isOpen, setIsOpen] = useState("");
  useEffect(() => {
    const getServices = async() => {
      try {
        const res = await axios.get("/service/all/")
        setServicesBox(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getServices()
  }, [])
  
  return (
    <div className='servicesContainer main-padding'>
    <div className='servicesHeader'>
        <h6 className='subHeader'>Our Services</h6>
        <h2 className='subTitleHeader'>The various services we provide to make your <br/> business more powerful</h2>
    </div>
        <div className='serviceBoxes flex a-center j-center'>
        {
            serviceBox.map((box)=>(
                <div className='serviceBox'  onClick={(e)=> setIsOpen(box)} key={box.id}>
                <img src={box.icon} alt="serviceImg" />
                    <p className='serviceBoxtitle'>{box.name}</p>
                    <p className='serviceBoxDesc'>{box.description}</p>
                    <div className='serviceIcon'>
                        <ChevronRightIcon className='serviceIconsvg'/>
                    </div>
                </div>
            ))
        }
        
        <div className={`servicesPopup ${isOpen ? "show" : ""}`}>
        <CloseIcon onClick={(e) => setIsOpen("")} className="servicesPopupIcon"/>
          <h2>{isOpen.name}</h2>
          <p>{isOpen.description}</p>
        </div>
            
        </div>
        
    <div className='ServiceVector'>
      <img src={Vector} alt="vector" />
    </div>

    </div>
  )
}
