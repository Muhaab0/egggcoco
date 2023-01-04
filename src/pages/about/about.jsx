import React from 'react'
import AboutusContent from '../../components/aboutUsContent/aboutusContent'
import CustomPackageContainer from '../../components/customPackageContainer/customPackageContainer'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'

export default function About() {
  return (
    <div>
    <Navbar />
    <AboutusContent />
    <CustomPackageContainer />
    <Footer />
    </div>
  )
}
