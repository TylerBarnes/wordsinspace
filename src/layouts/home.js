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
  }

  const styleTopBar = 
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    height: '50px',
  }

  return (
    <div style={styleWrapper}>
      <div className='gradient'>
      {/* ----------------------------WORDS IN SPACE---------------------------- */}
        <LeftNav />
      </div>
      {/* ----------------------------CONTAINER---------------------------- */}
      <div style={{width: '100%'}}>
        {/* ----------------------------TOP---------------------------- */}
        <div style={styleTopBar}>
          <div className='interface'>
            HOME
          </div>
        </div>

        {/* ----------------------------MAIN---------------------------- */}
        <div style={{
          maxHeight: '92vh',
          overflow: 'auto',
          width: '100%'
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home