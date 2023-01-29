import React, { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./WhatUp.css"
import axios from "axios";
import { useQuery } from "react-query";
function WhatsApp() {
  const [visible, setVisible] = useState(false);

  
  const { data } = useQuery("whats", async () => {
    return await axios.get("/api/main-info/").then((res) => res.data);
});


  
  window.addEventListener("scroll", () => {
    window.pageYOffset > 35 ? setVisible(true) : setVisible(false);
  });

  return (
    <div className="whatsUp">
      <a href={data?.whatsapp_link} className={`${visible ? "block" : "none"}`}>
        <WhatsAppIcon className="WhatsAppIcon"/>
      </a>
    </div>
  );
}



export default WhatsApp;