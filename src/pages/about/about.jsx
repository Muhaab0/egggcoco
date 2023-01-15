import React, { useEffect } from 'react'
import AboutusContent from '../../components/aboutUsContent/aboutusContent'
import CustomPackageContainer from '../../components/customPackageContainer/customPackageContainer'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Team from '../../components/ourTeam/team'
import  WhatsApp  from "../../components/whatsUp/whatsUp";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
    <Navbar />
    <AboutusContent />
    <Team />
    <CustomPackageContainer />
    <Footer />
    <WhatsApp />
    </div>
  )
}
