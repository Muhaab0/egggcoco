import React from 'react'
import './companies.css'
import Amazon from "../../assets/amazon-2.png"
import Jeep from "../../assets/jeep-7.png"
import Careem from "../../assets/careem.png"
import Jquery from "../../assets/jquery-1.png"
import Canon from "../../assets/canon-logo.png"
import FedEx from "../../assets/fedex-express-6.png"
import BitCoin from "../../assets/bitcoin-logo.png"
import pirelli from "../../assets/pirelli-2.png"
import Philips from "../../assets/philips.png"
import HubSpot from "../../assets/hubspot.png"

export default function Companies() {
  return (
    <div className='companiesContainer main-padding'>
        <div className='subHeader'>Some of Our Great Customers</div>
        <div className='subTitleHeader'>Some of the companies we have worked with</div>
        <div className='companiesBoxes flex a-center j-between'>
            <div className='companiesBox'>
                <img className='companiesBoxImg' src={Amazon} alt="amazon" />
            </div>

            <div className='companiesBox '>
                <img className='companiesBoxImg' src={Jeep} alt="amazon" />
            </div>

            <div className='companiesBox'>
                <img className='companiesBoxImg' src={Careem} alt="amazon" />
            </div>

            <div className='companiesBox'>
                <img className='companiesBoxImg' src={HubSpot} alt="amazon" />
            </div>

            <div className='companiesBox'>
                <img className='companiesBoxImg' src={Jquery} alt="amazon" />
            </div>

            <div className='companiesBox'>
                <img className='companiesBoxImg' src={Canon} alt="amazon" />
            </div>


            <div className='companiesBox'>
                <img className='companiesBoxImg' src={FedEx} alt="amazon" />
            </div>

            <div className='companiesBox'>
                <img className='companiesBoxImg' src={BitCoin} alt="amazon" />
            </div>

            <div className='companiesBox'>
                <img className='companiesBoxImg' src={pirelli} alt="amazon" />
            </div>

            <div className='companiesBox'>
                <img className='companiesBoxImg' src={Philips} alt="amazon" />
            </div>
        </div>
    </div>
  )
}
