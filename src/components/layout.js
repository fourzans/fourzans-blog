import React from "react";
import SiteHeader from "../components/siteHeader";
import SiteFooter from "../components/siteFooter";
import SiteFooterOpenSource from "../components/siteFooterOpenSource";

import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  return (
    <div className="site-container">
      <SiteHeader />
      <div className="site-wrapper">
          {children}
      </div>
      <SiteFooter />
      <SiteFooterOpenSource />
    </div>
  )
}
