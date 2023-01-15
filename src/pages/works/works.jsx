import React, { useEffect } from 'react'
import CheckOutProjects from '../../components/checkOutProjects/checkOutProjects'
import Companies from '../../components/companies/companies'
import CustomPackageContainer from '../../components/customPackageContainer/customPackageContainer'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import LatestProjects from '../../components/latestProjects/latestProjects'
import  WhatsApp  from "../../components/whatsUp/whatsUp";

export default function Works() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='Works'>
        <Navbar />
        <CheckOutProjects />
        <LatestProjects />
        <Companies />
        <CustomPackageContainer />
        <Footer />
        <WhatsApp/>
    </div>
  )
}
