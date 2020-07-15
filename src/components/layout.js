import React from "react"
import PropTypes from "prop-types"
import { Location, useLocation} from '@reach/router';

import Top from "./navigation/top"
import Browser from "./navigation/browser"
import Reader from "./navigation/reader"
import FiltersContainer from "./navigation/filtersContainer"
import Main from "./main"

import "../styles/layout.css"
import "../styles/addedStyles.css"

const Layout = ({children}) => {
  const { href, pathname } = useLocation();

  const isHomepage = pathname === '/' ? false : true

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row nowrap', 
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', 
        flexGrow: '1', 
      }}>
        <Top />
        <Main children={children}/>
      </div>
      <Browser />
      <Reader />
      <FiltersContainer isHomepage={isHomepage}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout