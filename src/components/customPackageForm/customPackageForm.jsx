import React,{useEffect, useRef, useState} from 'react'
import "./customPackageForm.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from "axios"
import {useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CallIcon from '@mui/icons-material/Call';



export default function CustomPackageForm() {
  const [service, setService] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [serviceErr, setServiceErr] = useState([]);
  const [errr, setErr] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    const getServices = async() => {
      try {
        const res = await axios.get("/service/all/")
        setService(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getServices()
  }, [])

  const handleChange = e => {

    if (e.target.checked === true) {
      setCheckList([...checkList, Number(e.target.value)]);
    } else {
      const selectedAcc = checkList.filter(a => {
        if (a === Number(e.target.value)) return false;
        return true;
      });
      setCheckList([...selectedAcc]);
    }
  };
  
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
        services:checkList
    }
    try {
      const res = await axios.post(`/custom-order/create/`, form )
      const name = form.customer.name
      navigate("/" ,{state:{name}})
      console.log(res)
    } catch (error) {
      setErr([])
      setServiceErr([])
      setServiceErr(error.response.data.services)
      setErr(error.response.data.customer.phone_number)
      setLoading(false)
    }
  }

  return (

    <div className='customPackageFormsContainer main-padding'>
    <div className='customPackageFormsgrid flex  '>
        <div className='customPackageFormsInformations'>
            <h2>Let’s Work Together!</h2>
            <p className='customPackageFormsParagraph'>I would like to meet with you to discuss something and opportunities for <br/> collaboration.</p>
        </div>
        
         <div className='customPackageForms'>
            <form onSubmit={(e)=>handleSubmit(e)} className="customPackageFormsInputContainer">

            <div className='customPackageFormsInput '>
          <input type="text" name="Name" id="Name" required placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <PersonOutlineIcon className='customFormsIcon' />
            </div>

            <div className='customPackageFormsPhone '>
            <PhoneInput
            className='customPhoneInput'
            placeholder="Enter phone number"
            value={phone}
            required
            country={'eg'}
            onChange={setPhone}/>
          <CallIcon className='customFormsIcon' />
            </div>

            <div className='customPackageFormsInput'>
          <input type="email" name="email" id="email" required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <MailOutlineIcon className='customFormsIcon' />
            </div>

            <div className='customPackageFormsInput'>
            <textarea name="message" id="message"  cols="55" rows="5" placeholder='Please discuss about ur vision' value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <MessageIcon className='customFormsIconTextArea' />
            </div>

                  <div className='checkBoxContainer flex gap-small '>
            {
                service.map((serv)=> (
                  <div className='checkBoxgrid' key={serv.id}>
                    <input type="checkbox"  id={serv.name} name={serv.name} value={serv.id}  onChange={(e)=> handleChange(e)}/>
                    <label htmlFor={serv.name} >{serv.name}</label><br/>
                  </div>
                ))
            }
                  </div>
                  
                   {
                    
                    errr || serviceErr? (
                      <div className='err'>
                      <div>
                      {errr}
                      </div>
                      <div>
                     {serviceErr}
                      </div>
                      </div>
                    ): ""
                  } 

            <div className='customPackageFormsInput submit btnh flex a-center gap-small'>
          <input className={`customPackageFormsInputSubmit submit flex a-center gap-small ${loading ? "loading" : ""}`} type="Submit" defaultValue="Let's Talk"/>
            </div>

        </form>
    </div>
    </div>
    </div>
  )
}
