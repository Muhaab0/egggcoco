import React,{useRef, useState} from 'react'
import "./contactForms.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function ContactForms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='contactFormsContainer main-padding'>
        <div className='contactFormsgrid flex  j-evenly a-center'>
            <div className='contactFormsInformations'>
                <h2>Let’s Work Together!</h2>
                <p className='contactFormsParagraph'>I would like to meet with you to discuss something and opportunities for <br/> collaboration.</p>
                <div className='contactFormsInfoContainer'>
                <p className='contactFormsInfo flex a-center gap-half'><MailOutlineIcon className='ContactIcon' /> <p>info@egcoco.com</p></p>
                <p className='contactFormsInfo flex a-center gap-half'><ApartmentIcon className='ContactIcon' /> <p>Address</p></p>
                <p className='contactFormsInfo flex a-center gap-half'><CallIcon className='ContactIcon' /> <p>+20  000 0000 00</p></p>
                </div>
            </div>
            <div className='contactForms'>
            <form onSubmit={(e)=> handleSubmit(e)} className="contactFormsInputContainer">

            <div className='contactFormsInput '>
          <input type="text" name="Name" id="Name" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
          <PersonOutlineIcon className='FormsIcon' />
            </div>

            <div className='contactFormsInput'>
          <input type="email" name="email" id="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
          <MailOutlineIcon className='FormsIcon' />
            </div>

            <div className='contactFormsInput'>
            <textarea name="message" id="message" cols="55" rows="5" placeholder='Message'onChange={(e)=> setMessage(e.target.value)}/>
            <MessageIcon className='FormsIconTextArea' />
            </div>


            <div className='contactFormsInput submit flex a-center gap-small'>
          <input className='contactFormsInputSubmit' type="Submit" value="Let's Talk"/>
            <ArrowForwardIcon className='FormsIconSubmit' />
            </div>

        </form>
            </div>
        </div>


        <ul className='contactFormsLinks flex a-center a-center'>

          <a href="#">
        <div className='contactFormsLinkListContainer flex a-center gap-small'>
          <li>
          <FacebookIcon className='contactFormsLinkIcons'/> 
          </li>
          <p>Facebook</p>
        </div>
          </a>

          <a href="#">
          <div className='contactFormsLinkListContainer instgram flex a-center gap-small'>
          <li>
          <InstagramIcon className='contactFormsLinkIcons'/> 
          </li>
          <p>Instgram</p>
          </div>
          </a>

          <a href="#">
          <div className='contactFormsLinkListContainer  flex a-center gap-small'>
          <li>
          <LinkedInIcon className='contactFormsLinkIcons'/> 
          </li>
          <p>Linkdin</p>
          </div>
          </a>

          <a href='#'>
          <div className='contactFormsLinkListContainer flex a-center gap-small'>
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
