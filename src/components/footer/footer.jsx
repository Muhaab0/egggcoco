import React from "react";
import Arrow from "../../assets/Send.png";
import "./footer.css";
import logo from "../../assets/Logo2.png";
import Map from "../../assets/Map.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink, Link } from "react-router-dom";
import Home from "../../pages/home/home";
import Works from "../../pages/works/works";
import About from "../../pages/about/about";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContactBox">
        <h6>Get Notified About Projects</h6>
        <h2>Subscribe Now</h2>
        <div className="footerInputContainer">
          <input type="email" name="email" id="email" placeholder="Email" />
          <button>
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="footer main-padding">
        <div className="footerTop  flex  j-between">

        <div className="footerAbout">
          <img src={logo} alt="logo" className="footerLogo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
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
            <p className="footerContactDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
            <p className="footerContactEmail">info@egcoco.com</p>
            <p className="footerContactPhone">+20 000 0000 00</p>
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
            <li><a href="#pricing">Pricing</a></li>
            <li><NavLink to="/contactus">Contact</NavLink></li>
        </ul>

            <ul className="footerPlatForms flex a-center j-between">
                <li className="platFromsIcons"><a href="#"><FacebookIcon className="platFormIconsicon" /></a></li>
                <li className="platFromsIcons"><a href="#"><InstagramIcon className="platFormIconsicon" /></a></li>
                <li className="platFromsIcons"><a href="#"><LinkedInIcon className="platFormIconsicon" /></a></li>
                <li className="platFromsIcons"><a href="#"></a><TwitterIcon className="platFormIconsicon" /></li>
            </ul>
      </div>
        </div>
    </div>
  );
}
