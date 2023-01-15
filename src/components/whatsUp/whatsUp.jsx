import React, { useEffect, useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./WhatUp.css"
import axios from "axios";
function WhatsApp() {
  const [visible, setVisible] = useState(false);
  const [links, setLinks] = useState("")
  useEffect(() => {
    const getLinks = async() => {
      try {
        const res = await axios.get("/api/main-info/")
        setLinks(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getLinks()
  }, [])
  window.addEventListener("scroll", () => {
    window.pageYOffset > 30 ? setVisible(true) : setVisible(false);
  });

  return (
    <div className="whatsUp">
      <a href={links.whatsapp_link} className={`${visible ? "block" : "none"}`}>
        <WhatsAppIcon className="WhatsAppIcon"/>
      </a>
    </div>
  );
}



export default WhatsApp;