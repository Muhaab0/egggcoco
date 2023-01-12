import { useState  } from "react";
import axios from "axios"
import "./contactForms.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MessageIcon from '@mui/icons-material/Message';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default function ContactForms() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState([]);
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = {
      "name":name,
      "email":email,
      "phone_number":phone,
      "note":message
    }
    try {
      const res = await axios.post(`/contact-us/`, form )
      const name = form.name
      navigate("/" ,{state:{name}})
    } catch (error) {
      setError(error.response.data.phone_number)
      setLoading(false)
    }
  }
  return (
    <div className='contactFormsContainer main-padding'>
        <div className='contactFormsgrid flex  j-evenly a-center'>
            <div className='contactFormsInformations'>
                <h2>Let’s Work Together!</h2>
                <p className='contactFormsParagraph'>I would like to meet with you to discuss something and opportunities for <br/> collaboration.</p>
                <div className='contactFormsInfoContainer'>
                <p className='contactFormsInfo flex a-center gap-half'><MailOutlineIcon className='ContactIcon' /> info@egcoco.com</p>
                <p className='contactFormsInfo flex a-center gap-half'><ApartmentIcon className='ContactIcon' /> Address</p>
                <p className='contactFormsInfo flex a-center gap-half'><CallIcon className='ContactIcon' /> +20  000 0000 00</p>
                </div>
            </div>
            <div className='contactForms'>
            <form onSubmit={(e)=> handleSubmit(e)} className="contactFormsInputContainer">

            <div className='contactFormsInput '>
          <input type="text" name="Name" id="Name" required placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
          <PersonOutlineIcon className='FormsIcon' />
            </div>

            <div className='packageFormsPhone'>
            <PhoneInput
            className='contactPhoneInput'
            placeholder="Enter phone number"
            value={phone}
            required
            country={'eg'}
            onChange={setPhone}/>
            <CallIcon className='contactFormsIcon' />
            </div>

            <div className='contactFormsInput'>
          <input type="email" name="email" id="email" required placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
          <MailOutlineIcon className='FormsIcon' />
            </div>

            <div className='contactFormsInput'>
            <textarea name="message" id="message" cols="55"  rows="5" placeholder='Message'onChange={(e)=> setMessage(e.target.value)}/>
            <MessageIcon className='FormsIconTextArea' />
            </div>

            { errors ? (
              <div className="err">
              <p>{errors}</p>
              </div>
            ) : ""
             }

            <div className={`contactFormsInput submit btnh flex a-center gap-small`}>
          <input className={`contactFormsInputSubmit  submit flex a-center gap-small ${loading ? "loading" : ""}`} type="Submit" defaultValue="Let's Talk"/>
            </div>

        </form>
            </div>
        </div>


        <ul className='contactFormsLinks flex a-center  j-evenly'>

          <a href="#">
        <div className='contactFormsLinkListContainer btnh flex a-center j-center gap-small'>
          <li>
          <FacebookIcon className='contactFormsLinkIcons'/> 
          </li>
          <p>Facebook</p>
        </div>
          </a>

          <a href="#">
          <div className='contactFormsLinkListContainer btnh instgram flex j-center a-center gap-small'>
          <li>
          <InstagramIcon className='contactFormsLinkIcons'/> 
          </li>
          <p>Instgram</p>
          </div>
          </a>

          <a href="#">
          <div className='contactFormsLinkListContainer btnh  flex a-center j-center gap-small'>
          <li>
          <LinkedInIcon className='contactFormsLinkIcons'/> 
          </li>
          <p>Linkdin</p>
          </div>
          </a>

          <a href='#'>
          <div className='contactFormsLinkListContainer btnh flex a-center j-center gap-small'>
          <li>
          <TwitterIcon className='contactFormsLinkIcons'/> 
          </li>
          <p>Twitter</p>
          </div>
          </a>

        </ul>
    </div>
  )
}
