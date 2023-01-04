import React from 'react'
import CheckOutProjects from '../../components/checkOutProjects/checkOutProjects'
import Companies from '../../components/companies/companies'
import CustomPackageContainer from '../../components/customPackageContainer/customPackageContainer'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import LatestProjects from '../../components/latestProjects/latestProjects'

export default function Works() {
  return (
    <div className='Works'>
        <Navbar />
        <CheckOutProjects />
        <Companies />
        <LatestProjects />
        <CustomPackageContainer />
        <Footer />
        
    </div>
  )
}
