import React, { useState } from 'react'
import './package.css'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Vector from "../../assets/HomeVector.png"
import packageBox from "../utilis/package"
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useRef} from 'react';


export default function Package() {
    const [openModal, setOpenModal] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [packageName, setPackageName] = useState("");
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);
    
    // console.log(inputRef.current?.value)
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    

        <div id='pricing' className='packageContainer main-padding'>
    <div className="subHeader">OurPackage</div>
    <div className="subTitleHeader">Our Packages For most businesses that want to otpimize web queries</div>
    <div className='packageBoxes flex a-center j-center'>


        {packageBox.map((box)=> 
                 (
                    <>

                    

        <div className={`packageBox ${box.name} `} key={box.name}  >
            <p className='text-center packagePrice'>{box.price}</p>
            <p className='packageName'>{box.name}</p>
            <p className='packageDescription'>For most businesses that want to otpimize web queries</p>
            <ul>
                <li>
                    <VerifiedUserIcon className='packageIcon' />
                    <p>All limited links</p>
                </li>
            
                <li>
                    <VerifiedUserIcon className='packageIcon' />
                    <p>Own analytics platform</p>
                </li>
            
                <li>
                    <VerifiedUserIcon className='packageIcon' />
                    <p>Chat support</p>
                </li>
            
                <li>
                    <VerifiedUserIcon className='packageIcon' />
                    <p>Optimize hashtags</p>
                </li>
            
                <li>
                    <VerifiedUserIcon className='packageIcon' />
                    <p>Unlimted users</p>
                </li>
            </ul>

            <div className='packageBtnContainer'  onClick={()=> setOpenModal(box.name)}>
            <button className='packageBtn'>Choose plan</button>
            </div>


        </div>

            <div className={`packagePopup ${openModal ? "show" : ""}`}>
            
            <div className='packageForms'>
            <form onSubmit={(e)=>handleSubmit(e)} className="packageFormsInputContainer">

            <div className='packageFormsInput '>
            <input type="text" name="Name" id="Name" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
            <PersonOutlineIcon className='packagesFormsIcon' />
            </div>

            <div className='packageFormsInput'>
            <input type="email" name="email" id="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
            <MailOutlineIcon className='packagesFormsIcon' />
            </div>

            <div className='packageFormsInput'>
            <input type="text" value={openModal} disabled readOnly  ref={inputRef} />
            </div>

            <div className='packageFormsInput'>
            <textarea name="message" id="message" cols="55" rows="5" placeholder='Please discuss about ur vision' className='packageTextArea'  onChange={(e)=> setMessage(e.target.value)}/>
            <MessageIcon className='packagesFormsIconTextArea' />
            </div>
            


            <div className='packageFormsInput submit flex a-center gap-small'>
          <input className='packageFormsInputSubmit' type="Submit" value="Let's Talk"/>
            <ArrowForwardIcon className='packagesFormsIconSubmit' />
            </div>

            </form>
            </div>


            <CloseIcon onClick={(e) => setOpenModal("")} className="packagePopupIcon"/>
            </div>

            </>
        )
        )}

    </div>





    <div className='PackageVector'>
      <img src={Vector} alt="vector" />
    </div>

    <div className='PackageVector2'>
      <img src={Vector} alt="vector" />
    </div>


    </div>
  )
}
