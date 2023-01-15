import React, { useEffect } from 'react'
import CustomPackageForm from '../../components/customPackageForm/customPackageForm'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import  WhatsApp  from "../../components/whatsUp/whatsUp";


export default function CustomPackage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
    <Navbar />
    <CustomPackageForm />
    <Footer />
    <WhatsApp />
    </div>
  )
}
