import React from 'react'
import CustomPackageForm from '../../components/customPackageForm/customPackageForm'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import ScrollToTop from "../../components/scroollToTop/scroollToTop";
import  WhatsApp  from "../../components/whatsUp/whatsUp";


export default function CustomPackage() {
  return (
    <div>
    <Navbar />
    <CustomPackageForm />
    <Footer />
    <ScrollToTop />
    <WhatsApp />
    </div>
  )
}
