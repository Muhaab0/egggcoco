import React, { useState } from "react";
import Arrow from "../../assets/Send.png";
import "./footer.css";
import logo from "../../assets/logo2.svg";
import Map from "../../assets/Map.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from "react-router-dom";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { useQuery } from "react-query";


export default function Footer() {
  const navigate = useNavigate();
  const [email , setEmail] = useState("")
  const [loading, setLoading] = useState("")



  const { data } = useQuery("footer", async () => {
    return await axios.get("/api/main-info/").then((res) => res.data);
});





  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = {
      "email":email,
      }
      try {
        await axios.post(`/api/subscribed-email/`, form )
        const name = form.email
        navigate("/" ,{state:{name}})
        setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div className="footerContainer">
      <div className="footerContactBox">
        <h6>Get Notified About Projects</h6>
        <h2>Subscribe Now</h2>
        <form onSubmit={(e)=> handleSubmit(e) } className="footerInputContainer">
          <input type="email" name="email" id="email" required placeholder="Email"  onChange={(e)=> setEmail(e.target.value)}/>
          <button className={`${loading ? "loading" : ""}`} disabled={loading}>
            <img src={Arrow} alt="arrow" />
          </button>
        </form>
      </div>
      <div className="footer main-padding">
        <div className="footerTop  flex  j-between">

        <div className="footerAbout">
          <img src={logo} alt="logo" className="footerLogo " />
          <p>
           {data?.why_us}
          </p>
        </div>
        <div className="footerOfficeMap">
            <h4>Our Office</h4>
            <div className="footerMapContainer">
            <img className="footerMap" src={Map} alt="map" />
            </div>
        </div>
        <div className="footerContact">
            <h4>Contact</h4>
            <div className="footerContactInfo">
            <p className="footerContactDesc">{data?.about_us}</p>
            <p className="footerContactEmail">{data?.email}</p>
            <p className="footerContactPhone">{data?.whatsapp}</p>
            </div>
        </div>
      </div>
      <hr className="footerHr"/>
      <div className="footerBottom flex a-center j-between">
        <h6>© 2022 EGCOCO</h6>
        <ul className="footerNav flex a-center j-between">
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/ourworks">Works</NavLink></li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li> <NavLink to="/contactus">Contact</NavLink></li>
        </ul>

            <ul className="footerPlatForms flex a-center j-between">
                <li className="platFromsIcons btnh"><a href={data?.facebook}><FacebookIcon className="platFormIconsicon" /></a></li>
                <li className="platFromsIcons btnh"><a href={data?.instagram}><InstagramIcon className="platFormIconsicon" /></a></li>
                {/* <li className="platFromsIcons btnh"><a href={footer.telegram}><LinkedInIcon className="platFormIconsicon" /></a></li> */}
                <li className="platFromsIcons btnh"><a href={data?.twitter}><TwitterIcon className="platFormIconsicon" /></a></li>
            </ul>
      </div>
        </div>
    </div>
  );
}
