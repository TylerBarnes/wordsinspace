import React from "react"
import {Link} from "gatsby" 
import PropTypes from "prop-types"

import {useTitle} from "../hooks/useTitle"

import FiltersContainer from "../components/navigation/filtersContainer"
import Title from "../components/navigation/Title"
import Search from "../components/navigation/Search"

import "../styles/layout.css"
import "../styles/addedStyles.css"

const Browser = ({children}) => {
  const title = useTitle();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row nowrap', 
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    }}>
      
      {/* Left */}
      <div 
        style={{
        border: '1px solid',
        alignSelf: 'flex-start',
        height: '100vh', 
        minWidth: '3vw', 
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        padding: '10px',
        textAlign: 'right'
      }}>
        <Title siteTitle={title} />      
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', 
        flexGrow: '1', 
      }}>
        {/* Top */}
        <div 
          style={{
          border: '1px solid',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between', 
          padding: '10px',
          minHeight: '3vw', 
          textTransform: 'uppercase',
        }}>
          Browser
          <Search />
        </div>

        {/* Main */}
        <div style={{
          maxHeight: '95vh',
          padding: '20px 10px',
          overflow: 'scroll'
        }}>
          {children}
        </div>
      </div>

      {/* Right */}
      <FiltersContainer />
    </div>
  )
}

Browser.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Browser