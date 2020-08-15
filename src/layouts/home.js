import React, {useState} from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveHomeVars} from "../utils/dom"
import {useLocation} from '@reach/router'

import WordsInSpace from '../components/wordsInSpace'
import MobileWordsInSpace from '../components/mobile/mobileWordsInSpace'

import GlyphLeft from '../images/assets/glyph_left.svg'
import GlyphLeftHover from '../images/assets/glyph_left_hover.svg'

import "../styles/layout.css"
import "../styles/global.css"
import "../styles/home.css"

const Home = ({children}) => {
  const [isGlyphHovered, setGlyphHovered] = useState(false)
  const location = useLocation()
  const isColophon = location.pathname === '/colophon'

  const breakpoints = useBreakpoint()
  const {mobileHome} = getResponsiveHomeVars(breakpoints)

  const styleWrapper =
  {
    display: 'flex',
    flexDirection: mobileHome ? 'column' : 'row',
    alignItems: mobileHome ? 'center' : 'flex-start',
    justifyContent: 'space-around',
    height: '100vh',
}

  const styleTopBar =
  {
    display: mobileHome ? 'none' : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    height: '60px',
  }

  const childrenWrapper =
  {
    height: 'calc(100vh - 60px)',
    overflow: 'auto',
  }

  return (
    <div style={styleWrapper}>
      {/* ----------------------------WORDS IN SPACE---------------------------- */}
      {!mobileHome && <WordsInSpace />}
      {mobileHome && <MobileWordsInSpace />}
      {/* ----------------------------CONTAINER---------------------------- */}
      <div style={{width: '100%'}}>
        {/* ----------------------------TOP---------------------------- */}
        <div className='gradient'>
          <div style={styleTopBar}>
            <div className='interface'>
              <Link to={'/'}>
                <div 
                tabIndex={0}
                role='button'
                style={{
                  display: 'flex',
                  justifyContent: 'row',
                  alignContent: 'center',
                }}
                  onMouseEnter={e=>setGlyphHovered(true)}
                  onMouseLeave={e=>setGlyphHovered(false)}
                  >
                  {isColophon &&
                    isGlyphHovered
                    ? <GlyphLeftHover />
                    : isColophon ? <GlyphLeft /> : null
                  }
                  <span style={{marginLeft: '5px'}}>HOME</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ----------------------------MAIN---------------------------- */}
        <div
          style={childrenWrapper}>
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
