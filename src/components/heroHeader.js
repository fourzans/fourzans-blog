import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Avatar from "../images/avatar.png";
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="description">
          <div className="headline">{data.site.siteMetadata.home.title}</div>
          <div
            className="primary-content"
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
          />
          <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
        </div>
        <div className="avatar">
          <img src={Avatar} />
        </div>
      </div>
    )}
  />
)