import React, { useEffect, useState } from 'react'
import "./faq.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
import Vector from "../../assets/YellowVector.png"
import Vector2 from "../../assets/BlueVector.png"
import axios from 'axios';



export default function Faq() {
    const [isOpen, setIsOpen] = useState(false);
    const [Current, setCurrent] = useState(0);
    const [faqs, setFaqs] = useState([])

    const Faq = (i) => {
        if (Current === i) {
            setIsOpen(current => !current)

        } }




        useEffect(() => {
          const getFaq = async() => {
            try {
              const res = await axios.get("api//FAQs/")
              setFaqs(res.data.results)
            } catch (error) {
              console.log(error)
            }
          }
          getFaq()
        }, [])

  return (
    <div className='faqContainer main-padding'>
        <div className="subHeader">Frequently Ask Question</div>
    <div className="subTitleHeader">Some of our frequently asked questions</div>


            {
                faqs.map((fq , i) => {
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
                    {fq.quote}
                    </p>
                    </div>
                    <div className={`title ${isOpen && Current === i ? "" : "none"}`}>{fq.answer}</div>
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
