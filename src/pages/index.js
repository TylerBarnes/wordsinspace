import React from 'react'
import {Link} from "gatsby"

import Home from '../layouts/home'
import SEO from '../components/seo'
import HomeItem from '../components/home/homeItem'
import { navigate } from "gatsby"

import MobileIndex from '../components/mobile/mobileIndex'

import {useSiteMenuData} from '../hooks/useSiteMenuData'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveHomeVars} from "../utils/dom"

import MobileFooter from '../components/mobile/mobileFooter'
import Footer from '../components/footer'

import Sticker_Email from '../images/assets/Sticker_Email.svg'
import Sticker_Email_text from '../images/assets/Sticker_Email_text.svg'
import Sticker_Browse from '../images/assets/Sticker_Browse.svg'
import Sticker_Browse_text from '../images/assets/Sticker_Browse_text.svg'
import Sticker_CV from '../images/assets/Sticker_CV.svg'
import Sticker_CV_text from '../images/assets/Sticker_CV_text.svg'
import Sticker_Classes from '../images/assets/Sticker_Classes.svg'
import Sticker_Classes_text from '../images/assets/Sticker_Classes_text.svg'
import Sticker_Words from '../images/assets/Sticker_Words.svg'
import Sticker_Words_text from '../images/assets/Sticker_Words_text.svg'
import Sticker_Pinboard from '../images/assets/Sticker_Pinboard.svg'
import Sticker_Pinboard_text from '../images/assets/Sticker_Pinboard_text.svg'
import Sticker_Twitter from '../images/assets/Sticker_Twitter.svg'
import Sticker_Twitter_text from '../images/assets/Sticker_Twitter_text.svg'
import Sticker_Upcoming from '../images/assets/Sticker_Upcoming.svg'
import Sticker_Upcoming_text from '../images/assets/Sticker_Upcoming_text.svg'

export default function HomePage() {
  const breakpoints = useBreakpoint();
  const {mobileHome} = getResponsiveHomeVars(breakpoints)

  const menuData = useSiteMenuData();

  if (!menuData)  {navigate('/work')}

  const menuItems = menuData[0]?.menuItems?.nodes

  if (mobileHome) return <MobileIndex menuItems={menuItems} />

  const styleSVGL = {
    position: 'relative',
    width:'60%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  const styleSVGR = {
    position: 'relative',
    width:'40%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  return (
    <Home>
      <SEO title='Home' />
      <div className='home-body'
        style={{
          display: 'flex',
          flexFlow: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          alignContent: 'stretch',
          marginRight: '50px',
        }}>
        <div
          style={{
            width: '60%',
          }}>
          <HomeItem item={menuItems[0]} index={1} />
          <HomeItem item={menuItems[1]} index={2} />
        </div>

        <div className="Sticker"
          style={styleSVGR}>
          <Link to={'/work/'}><Sticker_Browse_text id='sticker-browse-text' /><Sticker_Browse id='sticker-browse' /></Link>
        </div>

        <div className="Sticker"
          style={styleSVGL}>
          <Link to ={'/about/'}><Sticker_Words_text id='sticker-words-text' /><Sticker_Words id='sticker-words' /></Link>
        </div>

        <div
          style={{
            width:'40%',
          }}>
          <HomeItem item={menuItems[2]} index={3} />
        </div>

        <div
          style={{
            width:'60%',
          }}>
          <HomeItem item={menuItems[3]} index={4} />
          <HomeItem item={menuItems[4]} index={5} />
        </div>

        <div className="Sticker"
          style={styleSVGR}>
          <Link to={'/student-resources/'}><Sticker_Classes_text id='sticker-classes-text' /><Sticker_Classes id='sticker-classes' /></Link>
        </div>

        <div className="Sticker"
          style={styleSVGL}>
          <Link to={'/presentations/upcoming-events/'}><Sticker_Upcoming_text id='sticker-upcoming-text' /><Sticker_Upcoming id='sticker-upcoming' /></Link>
        </div>

        <div
          style={{
            width:'40%',
          }}>
          <HomeItem item={menuItems[5]} index={6} />
        </div>

        <div
          style={{
            width:'60%',
            display: 'flex',
            flexFlow: 'column',
            flexWrap: 'nowrap',
          }}>

          <HomeItem item={menuItems[6]} index={7} />

        </div>

        <div
          style={{
            width:'80%',
          }}>
          <div className='smallSticker'
            style={{
              marginTop: '5vh',
              display: 'flex',
              flexFlow: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              height: '120px',
            }}>
            <a aria-label='email' href="mailto:matterns@newschool.edu?subject=Hi Shannon!"><Sticker_Email_text id='sticker-email-text' /><Sticker_Email style={{height: '120%'}} id='sticker-email' /></a>
            <a aria-label='twitter' href="https://twitter.com/shannonmattern"><Sticker_Twitter_text id='sticker-twitter-text' /><Sticker_Twitter style={{height: '120%'}} id='sticker-twitter' /></a>
            <a aria-label='CV' href="https://wordsinspace.net/shannon/wp-content/uploads/2019/09/matterncv2019.pdf"><Sticker_CV_text id='sticker-cv-text' /><Sticker_CV style={{height: '120%'}} id='sticker-cv'/></a>
            <a aria-label='pinboard' href="https://pinboard.in/u:shannon_mattern"><Sticker_Pinboard_text id='sticker-pinboard-text' /><Sticker_Pinboard style={{height: '120%'}} id='sticker-pinboard' /></a>
          </div>
        </div>
      </div>
      {/* ----------------------------FOOTER---------------------------- */}
      {!mobileHome && <Footer />}
      {mobileHome && <MobileFooter />}
    </Home>
  )
}
