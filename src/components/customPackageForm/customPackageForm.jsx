import React,{useRef, useState} from 'react'
import "./customPackageForm.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import service from ".././utilis/service"

export default function CustomPackageForm() {
  const [checkList, setCheckList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(checkList)
  
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
  
  const handleSubmit = (e) => {
    e.preventDefault()
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
          <input type="text" name="Name" id="Name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
          <PersonOutlineIcon className='customFormsIcon' />
            </div>

            <div className='customPackageFormsInput'>
          <input type="email" name="email" id="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
          <MailOutlineIcon className='customFormsIcon' />
            </div>

            <div className='customPackageFormsInput'>
            <textarea name="message" id="message" cols="55" rows="5" placeholder='Please discuss about ur vision'  onChange={(e)=>setMessage(e.target.value)}/>
            <MessageIcon className='customFormsIconTextArea' />
            </div>

                  <div className='checkBoxContainer flex gap-small '>
            {
                service.map((serv)=> (
                  <div className='checkBoxgrid'>
                    <input type="checkbox" id={serv.title} name={serv.title} value={serv.id}  onChange={(e)=> handleChange(e)}/>
                    <label for={serv.title}>{serv.title}</label><br/>
                  </div>
                ))
            }
                  </div>


            <div className='customPackageFormsInput submit flex a-center gap-small'>
          <input className='customPackageFormsInputSubmit' type="Submit" value="Let's Talk"/>
            <ArrowForwardIcon className='customFormsIconSubmit' />
            </div>

        </form>
    </div>
    </div>
    </div>
  )
}
