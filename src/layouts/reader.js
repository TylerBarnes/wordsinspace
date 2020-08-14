import React, {useState} from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveReaderVars} from "../utils/dom"

import WordsInSpace from '../components/wordsInSpace'
import MobileWordsInSpace from '../components/mobile/mobileWordsInSpace'

import GlyphLeft from '../images/assets/glyph_left.svg'
import GlyphLeftHover from '../images/assets/glyph_left_hover.svg'

import "../styles/layout.css"
import "../styles/global.css"
import "../styles/reader.css"

const Reader = ({children}) => {
  const [isGlyphHovered, setGlyphHovered] = useState(false)

  const breakpoints = useBreakpoint();
  const {mobileNavBar} = getResponsiveReaderVars(breakpoints)

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
    display: mobileNavBar ? 'none' : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    height: '60px',
  }

  const childrenWrapper =
  {
    height: mobileNavBar ? '100%' : 'calc(100vh - 60px)',
    width: mobileNavBar ? '100%' : 'calc(100vw - 50px)',
    overflow: 'auto',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
  }

  return (
    <div className='gradient' style={styleWrapper}>

      {/* ----------------------------WORDS IN SPACE---------------------------- */}
      {!mobileNavBar && <WordsInSpace />}
      {mobileNavBar && <MobileWordsInSpace />}

      {/* ----------------------------CONTAINER---------------------------- */}
      <div style={{width: '100%'}}>
        {/* ----------------------------TOP---------------------------- */}
        <div style={styleTopBar}>
          <div className='interface'>
            <Link to={'/work/'}>
              <div style={{
                display: 'flex',
                justifyContent: 'row',
                alignContent: 'center',
              }}
                onMouseEnter={e=>setGlyphHovered(true)}
                onMouseLeave={e=>setGlyphHovered(false)}
                >
                {isGlyphHovered ? <GlyphLeftHover /> : <GlyphLeft />}
                <span style={{marginLeft: '5px'}}>BROWSER</span>
              </div>
            </Link>
          </div>
        </div>

        {/* ----------------------------Main---------------------------- */}
        <div
          style={childrenWrapper}>
            {children}
       </div>

      </div>
    </div>
  )
}

Reader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Reader
