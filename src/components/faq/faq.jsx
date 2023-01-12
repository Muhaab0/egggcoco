import React, { useState } from 'react'
import "./faq.css"
import faq from "../utilis/faq"
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
import Vector from "../../assets/YellowVector.png"
import Vector2 from "../../assets/BlueVector.png"



export default function Faq() {
    const [isOpen, setIsOpen] = useState(false);
    const [Current, setCurrent] = useState(0);

    const Faq = (i) => {
        if (Current === i) {
            setIsOpen(current => !current)

        } }

  return (
    <div className='faqContainer main-padding'>
        <div className="subHeader">Frequently Ask Question</div>
    <div className="subTitleHeader">Some of our frequently asked questions</div>


            {
                faq.map((fq , i) => {
                    return(
                        <div className='faq' key={i}>

                        <div className='content'>

                    <div className='sub flex' onClick={ () =>{
                     Faq(i);
                     setCurrent(i);
                    }}>
                    <div className="icons">
                        
                            {isOpen && Current === i ? <MinimizeIcon /> : <AddIcon />}
                        
                    </div>
                    <p className='faqSubTitle'>
                    {fq.subtitle}
                    </p>
                    </div>
                    <div className={`title ${isOpen && Current === i ? "" : "none"}`}>{fq.title}</div>
                        </div>
                        </div>
                    )
                })
            }
            <div className='FaqVector'>
      <img src={Vector} alt="vector" />
    </div>
    <div className='FaqVector2'>
      <img src={Vector2} alt="vector" />
    </div>

    </div>
  )
}
