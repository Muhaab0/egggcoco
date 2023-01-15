import React, { useEffect } from 'react'
import ContactForms from '../../components/ContactForms/contactForms'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import  WhatsApp  from "../../components/whatsUp/whatsUp";

export default function Contactus() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Navbar />
        <ContactForms/>
        <Footer />
        <WhatsApp />
    </div>
  )
}
