import Hero from "../../components/Hero/hero";
import Navbar from "../../components/navbar/navbar";
import Customers from "../../components/customers/customers";
import Services from "../../components/services/services";
import Package from "../../components/package/package";
import Companies from "../../components/companies/companies";
import Faq from "../../components/faq/faq";
import CustomPackageContainer from "../../components/customPackageContainer/customPackageContainer";
import Footer from "../../components/footer/footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ScrollToTop from "../../components/scroollToTop/scroollToTop";
import  WhatsApp  from "../../components/whatsUp/whatsUp";
export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  const state = useLocation();
  return (
    <div>
    {
    
    state.state?.name ? (
      <div className={` ConfirmationMessage ${isOpen ? "block" : "" }   `}>
      <CloseIcon onClick={() => setIsOpen(false)} className="ConfirmationClose" />
      <h2>Hello, <p>{state.state.name}</p></h2>
        <p>Thank u for contacting us <br/> we will reply to you later   </p>
        <button onClick={(e)=> setIsOpen(false)}>Ok</button>
      </div>
      
    ): ""
  } 
    <Navbar/>
    <Hero/>
    <Services />
    <Customers/>
    <Package />
    <Companies />
    <Faq />
    <CustomPackageContainer />
    <Footer />
    <ScrollToTop />
    <WhatsApp />
    </div>
  )
}