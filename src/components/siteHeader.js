import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../images/icon.png";
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )

    return (
        <header className="site-header">
            <div className="site-header-inner">
                <div className="site-title">
                    <a className="logo" href="/">
                        <img src={Icon} alt="icon"/>
                        <p>{data.site.siteMetadata.title}</p>
                    </a>
                </div>
                <Navigation />
            </div>
            <div className="retro-bars">
                <div className="line-one"></div>
                <div className="line-two"></div>
                <div className="line-three"></div>
                <div className="line-four"></div>
                <div className="line-five"></div>
            </div>
        </header>
    );
}