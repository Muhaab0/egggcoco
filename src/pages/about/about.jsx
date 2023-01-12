import React from 'react'
import AboutusContent from '../../components/aboutUsContent/aboutusContent'
import CustomPackageContainer from '../../components/customPackageContainer/customPackageContainer'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Team from '../../components/ourTeam/team'
import ScrollToTop from "../../components/scroollToTop/scroollToTop";
import  WhatsApp  from "../../components/whatsUp/whatsUp";

export default function About() {
  return (
    <div>
    <Navbar />
    <AboutusContent />
    <Team />
    <CustomPackageContainer />
    <Footer />
    <ScrollToTop />
    <WhatsApp />
    </div>
  )
}
