import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {useLocation} from '@reach/router'
import useBreakpoints from '../hooks/useBreakpoint';
import {getResponsiveBrowserVars} from "../utils/dom"

import WordsInSpace from '../components/wordsInSpace'
import Search from '../components/search'

import MobileWordsInSpace from '../components/mobile/mobileWordsInSpace'

import '../styles/layout.css'
import '../styles/global.css'
import '../styles/browser.css'

const Browser = ({ children, props }) => {
  const location = useLocation();
  const catName = location.pathname.replace('/', '').replace('/', '')
  
  const breakpoint = useBreakpoints();
  const {showSearch, mobileBrowserLayout, mobileNavBar} = getResponsiveBrowserVars(breakpoint)

  const styleWrapper = 
  {
    display: 'flex',
    flexDirection: mobileNavBar ? 'column' : 'row', 
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
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
    <div style={styleWrapper} >
      {/* ----------------------------WORDS IN SPACE---------------------------- */}
      {!mobileNavBar && <WordsInSpace />}
      {mobileNavBar && <MobileWordsInSpace />}

      {/* ----------------------------CONTAINER---------------------------- */}
      <div 
        style={{
          width: '100%',
        }}>
        {/* ----------------------------TOP---------------------------- */}
        <div style={styleTopBar} >
          <div  className='interface'>
            {catName!== 'work' && 
              <div>
                Browsing: <span style={{fontSize: '10px'}} className={catName.toLowerCase()}>{catName}</span>
              </div>
            }
          </div>
          {showSearch && <Search />}
        </div>

        {/* ----------------------------MAIN ---------------------------- */}
        <div
          style={{
            display: 'flex',
            flexDirection: mobileBrowserLayout ? 'column' : 'row',
            justifyContent: 'space-between',
            height: '100vh',
            overflow: 'auto',
          }}>
            {children}
        </div>
      </div>
    </div>
  )
}

Browser.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Browser
