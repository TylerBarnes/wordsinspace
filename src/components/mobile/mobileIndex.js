import React from 'react'
import {Link} from "gatsby" 

import Home from '../../layouts/home'
import SEO from '../seo'
import MobileFooter from "./mobileFooter"
import Glyph from '../../images/assets/glyph.svg'

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveHomeVars} from "../../utils/dom"

import Sticker_Browse_Mobile from '../../images/assets/Sticker_Browse_Mobile.svg'

export default function HomePage({menuItems}) {
  const breakpoints = useBreakpoint()
  const {mobileHome} = getResponsiveHomeVars(breakpoints)

  const styleWrapper = {
    display: 'flex',
    flexFlow: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    height: '60vh'
  }

  const styleSVG = {
    alignSelf: 'center',
    margin: '0'
  }

  const styleLink = {
    width: '90vw',
    height: '60px',
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px dotted #6262F4'
  }
  
  return (
    <Home>
      <SEO title='Home' />
      <div 
        style={styleWrapper}>
          <div 
            style={styleSVG}>
            <Link to={'/work/'}><Sticker_Browse_Mobile /></Link>
          </div>
          <Link style={styleLink} to={'/teaching'}>
            <div className='home-title-mobile'>CLASSES</div>
            <Glyph />
          </Link>          

          <Link style={styleLink} to={'/upcoming-events'}>
            <div className='home-title-mobile'>UPCOMING EVENTS</div>
            <Glyph />
          </Link>

          <Link style={styleLink} to={'/about'}>
            <div className='home-title-mobile'>ABOUT</div>
            <Glyph />
          </Link>

      </div>
      <MobileFooter />
    </Home >
  )
}