import React, { useState } from 'react'
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
import { useQuery } from 'react-query';
import { Transition } from 'react-transition-group';


export default function Package() {
    const [openModal, setOpenModal] = useState("");
    const [Opened, setOpened] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+20");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const [err, setErr] = useState([]);
    const navigate = useNavigate();


      const { data , isLoading , isError ,error} = useQuery("package", async () => {
        return await axios.get("/api/package/all/").then((res) => res.data);
    });


    

    const nodeRef = useRef(null);
    const duration = 500;


    
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity:0
  }
  
  const transitionStyles = {
    entered:  { 
  opacity:1  },
    exiting:  { opacity:0 },
    exited:  { display:"none" },
  };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErr(false)
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
            await axios.post(`/api/package-order/create/`,  form )
            const name = form.customer.name
            setOpenModal(false)
            navigate("/" ,{state:{name}})
            setErr(false)
            setLoading(false)
          } catch (error) {
            setErr(error.response.data.customer.phone_number)
            setLoading(false)
          }
    }

  return (
    

        <div id='pricing' className='packageContainer main-padding'>
    <div className="subHeader">OurPackage</div>
    <div className="subTitleHeader">Our Packages</div>
    <div className='packageBoxes flex a-center j-center'>

    {
    isLoading ? (
        <div className='wait'>
        <p>Loading Please Wait...</p>
        </div>     
    )
      : ""
    }

    {
    isError ? (
          <div className='err'>
          <p>{error.message}</p>
          </div>
        ) : ""
    }


        {data?.results.map((box)=> 
       
                 (
                    <div key={box.id}>

                    

        <div className={`packageBox ${box.name} `}>
            <p className='text-center packagePrice'>{+box.price}$</p>
            <p className='packageName'>{box.name}</p>

              <div
                dangerouslySetInnerHTML={{__html:box.description}}>
              </div>

            
           
            <div className='packageBtnContainer btnh'  onClick={()=> {
             setOpenModal(box)
              setOpened(true)
            }
            }>
        
            <button className='packageBtn'>Choose plan</button>
            </div>


        </div>

        </div>
        )
        )}
                  <>
                  <Transition nodeRef={nodeRef} in={Opened} timeout={duration}>
        {state => (
            <div className={`packagePopup ${openModal ? "show" : ""}`}        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
        
            
            
            <div className='packageForms'>
            <form onSubmit={(e)=>handleSubmit(e)} className="packageFormsInputContainer">

            <div className='packageFormsInput '>
            <input type="text" name="Name" id="Name" placeholder="Name" required value={name} onChange={(e)=> setName(e.target.value)}/>
            <PersonOutlineIcon className='packagesFormsIcon' />
            </div>

            <div className='packageFormsPhone'>
            <PhoneInput
            className='packagePhoneInput'
            placeholder="Phone"
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
            <textarea name="message" required id="message" cols="55" rows="5" placeholder='Please discuss about ur vision' className='packageTextArea' value={message}  onChange={(e)=> setMessage(e.target.value)}/>
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




                  {
                    loading ? (
                      <>
                      <div className='wait'>
                      Please Wait...
                      </div>
                      </>
                    ): ""
                  } 



          <input className={`FormsInputSubmit btnh flex a-center gap-small ${loading ? "loading" : ""}`} disabled={loading} type="Submit" defaultValue="Let's Talk"/>

            </form>
            </div>


            <CloseIcon onClick={(e) =>
            {
            setOpenModal("")
              setOpened(false)
            } 
            } className="packagePopupIcon"/>
            </div>
            )}
          </Transition>
    </>

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
