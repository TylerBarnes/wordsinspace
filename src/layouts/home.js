import React, {useState} from "react"
import {Link} from "gatsby" 
import PropTypes from "prop-types"

import LeftNav from "../components/leftNav"

import "../styles/layout.css"
import "../styles/global.css"
import "../styles/home.css"

const Home = ({children}) => {

  const styleWrapper = 
  {
    display: 'flex',
    flexDirection: 'row nowrap', 
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    background: 'rgba(255, 145, 83, 0.13)',
  }

  const styleTopBar = 
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    height: '60px',
  }

  return (
    <div style={styleWrapper}>
    
      {/* ----------------------------WORDS IN SPACE---------------------------- */}
      <LeftNav />

      {/* ----------------------------CONTAINER---------------------------- */}
      <div style={{width: '100%' }}>
        {/* ----------------------------TOP---------------------------- */}
        <div style={styleTopBar}>
          <div className='interface'>
            HOME
          </div>
        </div>

        {/* ----------------------------MAIN---------------------------- */}
        {children}
      </div>
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home