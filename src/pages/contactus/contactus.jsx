import React from 'react'
import ContactForms from '../../components/ContactForms/contactForms'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import ScrollToTop from "../../components/scroollToTop/scroollToTop";
import  WhatsApp  from "../../components/whatsUp/whatsUp";

export default function Contactus() {
  return (
    <div>
        <Navbar />
        <ContactForms/>
        <Footer />
        <ScrollToTop />
        <WhatsApp />
    </div>
  )
}
