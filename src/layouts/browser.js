import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {useLocation} from '@reach/router'
import useBreakpoints from '../hooks/useBreakpoint';
import {getResponsiveBrowserVars} from "../utils/dom"

import WordsInSpace from '../components/wordsInSpace'
import Search from '../components/search'

import MobileWordsInSpace from '../components/mobile/mobileWordsInSpace'
import MobileFilters from '../components/mobile/mobileFilters'

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
    alignItems: 'center',
    textTransform: 'uppercase',
    height: '60px',
  }

  const childrenWrapper =
  {
    display: 'flex',
    flexDirection: mobileBrowserLayout ? 'column' : 'row',
    justifyContent: 'space-between',
    height: '90vh',
    overflow: 'auto',
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
          <div className='interface'>
            Browsing: 
            <span 
              style={{
                marginLeft: '5px'
              }}
              className={catName.toLowerCase()}>
              {catName === 'work' ? `All` : `${catName}`}
            </span>
          </div>
          {showSearch && <Search />}
        </div>
        {mobileBrowserLayout && <MobileFilters />}
        {/* ----------------------------MAIN ---------------------------- */}
        <div
          style={childrenWrapper}>
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
