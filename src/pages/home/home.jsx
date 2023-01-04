import Hero from "../../components/Hero/hero";
import Navbar from "../../components/navbar/navbar";
import Customers from "../../components/customers/customers";
import Services from "../../components/services/services";
import Package from "../../components/package/package";
import Companies from "../../components/companies/companies";
import Faq from "../../components/faq/faq";
import CustomPackageContainer from "../../components/customPackageContainer/customPackageContainer";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <div className="home">
    <Navbar/>
    <Hero/>
    <Services />
    <Customers/>
    <Package />
    <Companies />
    <Faq />
    <CustomPackageContainer />
    <Footer />
    </div>
  )
}