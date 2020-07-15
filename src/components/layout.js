import React from "react"
import PropTypes from "prop-types"
import { Location, useLocation} from '@reach/router';
import {useCategories} from "./hooks/useCategories"

import Header from "./navigation/header"
import Browser from "./navigation/browser"
import Reader from "./navigation/reader"
import FiltersContainer from "./navigation/filtersContainer"
import Main from "./main"

import "../styles/layout.css"
import "../styles/addedStyles.css"

const Layout = ({children}) => {
  const { href, pathname } = useLocation();
  const categories = useCategories();

  const isHomepage = pathname === '/' 
  const isIndex = categories.map(category => category.slug).includes(pathname.slice(1, -1))

  return (
    <>
      
      {isHomepage && 
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
            <Header />
            <Main children={children}/>
          </div>
          <Browser />
          <Reader />
          <FiltersContainer isHomepage={isHomepage}/>
        </div>
      }


      {isIndex &&
        <div style={{
          display: 'flex',
          flexDirection: 'row nowrap', 
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        }}>
          <Header />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
            flexGrow: '1', 
          }}>
            <Browser />
            <Main children={children}/>
          </div>
          <Reader />
          <FiltersContainer isHomepage={isHomepage}/>
        </div>
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout