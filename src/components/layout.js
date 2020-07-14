import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Top from "./navigation/top"
import Browser from "./navigation/browser"
import Reader from "./navigation/reader"
import Menu from "./menu"

import "../styles/layout.css"
import "../styles/addedStyles.css"

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />      
      <Top />
      <Browser />
      <Reader />
      <Menu />
      <div>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout