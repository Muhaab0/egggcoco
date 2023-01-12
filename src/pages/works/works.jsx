import React from 'react'
import CheckOutProjects from '../../components/checkOutProjects/checkOutProjects'
import Companies from '../../components/companies/companies'
import CustomPackageContainer from '../../components/customPackageContainer/customPackageContainer'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import LatestProjects from '../../components/latestProjects/latestProjects'
import ScrollToTop from "../../components/scroollToTop/scroollToTop";
import  WhatsApp  from "../../components/whatsUp/whatsUp";

export default function Works() {
  return (
    <div className='Works'>
        <Navbar />
        <CheckOutProjects />
        <Companies />
        <LatestProjects />
        <CustomPackageContainer />
        <Footer />
        <ScrollToTop/>
        <WhatsApp/>
    </div>
  )
}
