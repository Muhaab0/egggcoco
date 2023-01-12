import React, { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./WhatUp.css"
function WhatsApp() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <div className="whatsUp">
      <a href="https://wa.link/68dy1c" className={`${visible ? "block" : "none"}`}>
        <WhatsAppIcon className="WhatsAppIcon"/>
      </a>
    </div>
  );
}



export default WhatsApp;