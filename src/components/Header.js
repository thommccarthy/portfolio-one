import React from "react"
import "./header.styles.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous"
      />

      <div className="header-main">
        <div className="dev">
          <h1>{data.site.siteMetadata.title}</h1>
          <span className="attr">Web Developer</span>
          <span className="dot">•</span>
          <span className="attr">Designer</span>
          <span className="dot">•</span>
          <span className="attr">Musician/Sound Engineer</span>
        </div>
        <div className="icons">
          <a href="https://github.com/thommccarthy">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/mccarthythom">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://codepen.io/thommccarthy">
            <i className="fab fa-codepen"></i>
          </a>
          <a href="https://www.linkedin.com/in/thom-mccarthy-6a9a1780/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <span className="pages-link">
          <Link to="/">Portfolio</Link>|<Link to="/blog">Blog</Link>|
          <Link to="/about">About</Link>
        </span>

        <hr />
      </div>
    </div>
  )
}

export default Header
