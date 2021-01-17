import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="navigation">
       <div className="links">
        <a href="/articles">Articles</a>
        <a href="https://twitter.com/cuatrozans">Twitter</a>
        <a href="https://github.com/fourzans">Github</a>
      </div>
      <div
        className={`overlay-container ${visible ? `visible` : ""}`}
        onClick={() => { setVisible(false);}}
        onKeyDown={() => { setVisible(false);}}
      >
        <div className="mobile-nav-item"><a aria-current="page" className="" href="/">~</a></div>
        <div className="mobile-nav-item"><a href="/articles">/articles</a></div>
        <div className="mobile-nav-item"><a href="/contact">/contact</a></div>
        <div className="mobile-nav-item"><a href="https://github.com/fourzans">/github</a></div>
        <div className="mobile-nav-item"><a href="https://twitter.com/cuatrozans">/twitter</a></div>
      </div>
      <a href="#" onClick={() => {
        setVisible(true);
      }} className="mobile-open-menu">
        <FontAwesomeIcon icon={faBars} />
      </a >
    </div>
  );
};