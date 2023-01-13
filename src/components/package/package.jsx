import React, { useEffect, useState } from 'react'
import './package.css'
import Vector from "../../assets/HomeVector.png"
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MessageIcon from '@mui/icons-material/Message';
import {useRef} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CallIcon from '@mui/icons-material/Call';
import FactCheckIcon from '@mui/icons-material/FactCheck';


export default function Package() {
    const [openModal, setOpenModal] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [packageBoxs, setPackageBoxs] = useState([])
    const inputRef = useRef(null);
    const [err, setErr] = useState([]);
    const navigate = useNavigate();
  console.log(packageBoxs)
    useEffect(() => {
        const getPackage = async() => {
          try {
            const res = await axios.get("/package/all/")
            setPackageBoxs(res.data.results)
          } catch (error) {
            console.log(error)
          }
        }
        getPackage()
      }, [])
    



    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const form = {
            customer: {
              "name":name,
              "email":email,
              "phone_number":phone,
              "note":message,
            },
            package:+openModal.id
          }
          try {
            const res = await axios.post(`/package-order/create/`,  form )
            const name = form.customer.name
            setOpenModal(false)
            navigate("/" ,{state:{name}})
          } catch (error) {
            setErr(error.response.data.customer.phone_number)
            setLoading(false)
          }
    }

  return (
    

        <div id='pricing' className='packageContainer main-padding'>
    <div className="subHeader">OurPackage</div>
    <div className="subTitleHeader">Our Packages For most businesses that want to otpimize web queries</div>
    <div className='packageBoxes flex a-center j-center'>


        {packageBoxs.map((box)=> 
       
                 (
                    <div key={box.id}>

                    

        <div className={`packageBox ${box.name} `}>
            <p className='text-center packagePrice'>{+box.price}$</p>
            <p className='packageName'>{box.name}</p>

            {/* <VerifiedUserIcon className='packageIcon' /> */}
              <div
                dangerouslySetInnerHTML={{__html:box.description}}>
              </div>

            
           
            <div className='packageBtnContainer btnh'  onClick={()=> setOpenModal(box)}>
            <button className='packageBtn'>Choose plan</button>
            </div>


        </div>

        </div>
        )
        )}
            <div className={`packagePopup ${openModal ? "show" : ""}`}>
            
            <div className='packageForms'>
            <form onSubmit={(e)=>handleSubmit(e)} className="packageFormsInputContainer">

            <div className='packageFormsInput '>
            <input type="text" name="Name" id="Name" placeholder="Name" required value={name} onChange={(e)=> setName(e.target.value)}/>
            <PersonOutlineIcon className='packagesFormsIcon' />
            </div>

            <div className='packageFormsPhone'>
            <PhoneInput
            className='packagePhoneInput'
            placeholder="Enter phone number"
            value={phone}
            required
            country={'eg'}
            onChange={setPhone}/>
            <CallIcon className='packagesFormsIcon' />
            </div>

            <div className='packageFormsInput'>
            <input type="email" name="email" id="email" placeholder="Email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <MailOutlineIcon className='packagesFormsIcon' />
            </div>

            <div className='packageFormsInput'>
            <input type="text" defaultValue={openModal.name} disabled readOnly  required ref={inputRef}/>
            <FactCheckIcon className='packagesFormsIcon' />
            </div>

            <div className='packageFormsInput'>
            <textarea name="message" id="message" cols="55" rows="5" placeholder='Please discuss about ur vision' className='packageTextArea' value={message}  onChange={(e)=> setMessage(e.target.value)}/>
            <MessageIcon className='packagesFormsIconTextArea' />
            </div>
                  
            {
                    err ? (
                      <>
                      <div className='err'>
                      {err}
                      </div>
                      </>
                    ): ""
                  } 


            <div className='packageFormsInput submit btnh flex a-center gap-small'>
          <input className={`packageFormsInputSubmit  submit flex a-center gap-small ${loading ? "loading" : ""}`} type="Submit" defaultChecked="Let's Talk"/>
            </div>

            </form>
            </div>


            <CloseIcon onClick={(e) => setOpenModal("")} className="packagePopupIcon"/>
            </div>

    

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
