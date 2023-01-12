import React, { useState } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import "./scroollToToTop.css"
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <div className="scroolToTop">
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <ArrowDropUpIcon className="ScrollToTopIcon"/>
      </a>
    </div>
  );
}



export default ScrollToTop;