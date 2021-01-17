import React from "react"
import SiteHeader from "../components/siteHeader"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  return (
    <div className="site-container">
      <SiteHeader />
      <div className="site-wrapper">
          {children}
          <footer className="site-footer">
            <p>&copy; marianofourzans &bull; {new Date().getFullYear()} &bull; all code <a href="http://opensource.org/licenses/MIT" rel="nofollow">MIT license</a></p>
          </footer>
      </div>
    </div>
  )
}
