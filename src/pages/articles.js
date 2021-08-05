import React from "react";
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout";
import HeroHeader from "../components/heroHeader";
import SEO from "../components/seo";

const ArticlesPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => {
      return (
        <article
        key={edge.node.frontmatter.title}
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
        >
          <header>
            <h2>
              <Link to={edge.node.frontmatter.path} itemProp="url">
                <span className="article-title" itemProp="headline">{edge.node.frontmatter.title}</span>
              </Link>
            </h2>
            <span className="article-meta">{edge.node.frontmatter.date}</span> - <span className="article-meta">{edge.node.frontmatter.tags}</span>
          </header>
        </article>
      )
    });

  return (
    <Layout>
      <SEO title="All articles" />
      <div className="articles">
        <div className="hero-header">
          <div className="description">
            <h1>All Articles</h1>
          </div>
        </div>
        <div>
          {Posts}
        </div>
      </div>
    </Layout>
  )
}

export default ArticlesPage
export const pageQuery = graphql`
  query articlesPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            path
            title
            thumbnail
            tags
          }
        }
      }
    }
  }
`
