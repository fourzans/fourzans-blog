import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
          <div
            className="headline"
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
          />
        </div>
        <div className="avatar">
          <img alt="avatar" src={Avatar} />
        </div>
      </div>
    )}
  />
)