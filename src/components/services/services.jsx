import React, { useState } from 'react'
import './services.css'
import serviceBox from '../utilis/service'
import Ideat from '../../assets/ideat.png'
import App from '../../assets/App.png'
import Programing from '../../assets/Programing.png'
import Design from '../../assets/Design.png'
import Busines from '../../assets/Busines.png'
import Marketing from '../../assets/Marketing.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Vector from "../../assets/HomeVector.png"
import CloseIcon from '@mui/icons-material/Close';

export default function Services() {

  const [isOpen, setIsOpen] = useState("");
  return (
    <div className='servicesContainer main-padding'>
    <div className='servicesHeader'>
        <h6 className='subHeader'>Our Services</h6>
        <h2 className='subTitleHeader'>The various services we provide to make your <br/> business more powerful</h2>
    </div>
        <div className='serviceBoxes flex a-center j-center'>
        {
            serviceBox.map((box)=>(
                <div className='serviceBox'  onClick={()=> setIsOpen(box)}>
                <img src={require(`../../assets/${box.img}`)} alt="serviceImg" />
                    <p className='serviceBoxtitle'>{box.title}</p>
                    <p className='serviceBoxDesc'>{box.description}</p>
                    <div className='serviceIcon'>
                        <ChevronRightIcon className='serviceIconsvg'/>
                    </div>
                </div>
            ))
        }
        
        <div className={`servicesPopup ${isOpen ? "show" : ""}`}>
        <CloseIcon onClick={(e) => setIsOpen("")} className="servicesPopupIcon"/>
          <h2>{isOpen.title}</h2>
          <p>{isOpen.description}</p>
        </div>
            
        </div>
        
    <div className='ServiceVector'>
      <img src={Vector} alt="vector" />
    </div>

    </div>
  )
}
