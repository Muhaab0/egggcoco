import React from 'react'
import "./customers.css"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function customers() {
  return (
    <div className='customerContainer flex j-between main-padding'>
    <div className='customerBoxes flex  '>
        <div className='customerBox'>
        <div className='customerBoxContainer'>
            <div className='customerTitleBlue customerTitle'>70K+</div>
            <div className='customerDesc'>We Have more than customers</div>
        </div>
        </div>

        <div className='customerBox customerBoxUp'>
        <div className='customerBoxContainer'>
            <div className='customerTitleYellow customerTitle'>100+</div>
            <div className='customerDesc'>Projects We have completed</div>
        </div>
        </div>
        
        <div className='customerBox'>
        <div className='customerBoxContainer'>
            <div className='customerTitlePink customerTitle'>10M+</div>
            <div className='customerDesc'>People who are helped because our hard work</div>
        </div>
        </div>
        
        <div className='customerBox customerBoxUp'>
        <div className='customerBoxContainer'>
            <div  className='customerTitleGreen customerTitle'>200+</div>
            <div className='customerDesc'>Support from world-renowned companies</div>
        </div>
        </div>
    </div>

    <div className='customerCustomer'>
        <h2>Customer <br/> satisfaction is our first proiority</h2>
        <p>We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best customer by:</p>
        <ul>
            <li>
            <VerifiedUserIcon className='customerIcon'/>
            <p>Proide idea support from our creative team</p>
            </li>
            <li>
            <VerifiedUserIcon className='customerIcon'/>
            <p> Provide attractive and professional design customers</p>
           </li>
            <li>
            <VerifiedUserIcon className='customerIcon'/>
            <p>Support for customer 24 hours a week</p>
            </li>
            <li>
            <VerifiedUserIcon className='customerIcon'/>
            <p>Helping our customers to grow thier business</p>
            </li>
            <li>
            <VerifiedUserIcon className='customerIcon'/>Provide support to market products through online marketplace</li>
        </ul>
    </div>
    </div>
  )
}
