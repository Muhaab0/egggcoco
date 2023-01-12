import React from 'react'
import "./customPackagegContainer.css"
import EastIcon from '@mui/icons-material/East';
import {Link} from "react-router-dom";
export default function CustomPackageContainer() {
  return (
    <div className='customPackageContainerContainer main-padding'>
        <div className='customPackageContainerBox'>
            <h6>Are You Ready For</h6>
            <h2>Start a New Custom Package</h2>
            
            <button className='btnh'><Link to="/custompackage"><p>Start Now</p>  <EastIcon style={{fontWeight:"200"}} /> </Link></button>
            
            </div>
    </div>
  )
}
