import React from 'react'
import PropTypes from 'prop-types'

import {useLocation} from '@reach/router'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveBrowserVars} from "../utils/dom"

import WordsInSpace from '../components/wordsInSpace'
import Search from '../components/search'
import CategoriesHorizontal from '../components/filters/categoriesHorizontal'

import MobileWordsInSpace from '../components/mobile/mobileWordsInSpace'

import '../styles/layout.css'
import '../styles/global.css'
import '../styles/browser.css'

const Browser = ({ children, props }) => {
  const location = useLocation();
  const catName = location.pathname.replace('/', '').replace('/', '')

  const breakpoints = useBreakpoint()
  const {showSearch, mobileBrowserLayout, mobileNavBar} = getResponsiveBrowserVars(breakpoints)
  const styleWrapper =
  {
    display: 'flex',
    flexDirection: mobileNavBar ? 'column' : 'row',
    flexWrap: 'nowrap',
    alignItems: mobileNavBar ? 'center' : 'flex-start',
    justifyContent: 'space-around',
  }

  const styleTopBar =
  {
    display: mobileNavBar ? 'none' : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'uppercase',
    height: mobileNavBar ? '35px' : '50px',
    width: mobileNavBar ? '84vw' : 'calc(-50px + 100vw)',
    alignSelf: mobileNavBar ? 'center' : 'normal',
  }

  const childrenWrapper =
  {
    display: 'flex',
    flexDirection: mobileBrowserLayout ? 'column' : 'row',
    justifyContent: 'space-between',
    height: '100%',
    overflow: 'auto',
  }

  return (
    <div className={mobileBrowserLayout ? 'browser' : 'browser right-gradient'} style={styleWrapper} >
      {/* ----------------------------WORDS IN SPACE (LEFT)---------------------------- */}
      {!mobileNavBar && <WordsInSpace />}
      {mobileNavBar && <MobileWordsInSpace />}

      {/* ----------------------------MAIN CONTAINER---------------------------- */}
      <div
        style={{
          width: '100%',
          display: mobileNavBar ? 'flex' : 'block',
          flexFlow: 'column',
        }}>
        {/* ----------------------------TOP---------------------------- */}
        <div className={mobileBrowserLayout ? '' : 'top-bar'} style={styleTopBar} >
          <CategoriesHorizontal
            catName={catName}
            mobileNavBar={mobileNavBar}
            mobileBrowserLayout={mobileBrowserLayout} />
          {showSearch && <Search />}
        </div>
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
