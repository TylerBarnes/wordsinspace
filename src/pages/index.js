import React from 'react'
import {Link} from "gatsby"

import Home from '../layouts/home'
import SEO from '../components/seo'
import HomeItem from '../components/home/homeItem'
import Footer from "../components/footer"
import { navigate } from "gatsby"

import {useSiteMenuData} from '../hooks/useSiteMenuData'

import Sticker_Email from '../images/assets/Sticker_Email.svg'
import Sticker_Browse from '../images/assets/Sticker_Browse.svg'
import Sticker_CV from '../images/assets/Sticker_CV.svg'
import Sticker_Student from '../images/assets/Sticker_Student.svg'
import Sticker_Words from '../images/assets/Sticker_Words.svg'
import Sticker_Pinboard from '../images/assets/Sticker_Pinboard.svg'
import Sticker_Twitter from '../images/assets/Sticker_Twitter.svg'
import Sticker_Upcoming from '../images/assets/Sticker_Upcoming.svg'

export default function HomePage() {
  const menuData = useSiteMenuData();

  if (!menuData)  {navigate('/work')}

  const menuItems = menuData[0]?.menuItems?.nodes

  const styleSVG = {
    width:'50%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  return (
    <Home>
      <SEO title='home' />
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          alignContent: 'stretch',
          marginLeft: '5px',
          }}>
          <div
            style={{
              width: '50%',
            }}>
            <HomeItem item={menuItems[0]} index={1} />
            <HomeItem item={menuItems[1]} index={2} />
          </div>

          <div
            style={styleSVG}>
            <Link to={'/work/'}><Sticker_Browse /></Link>
          </div>

          <div
            style={styleSVG}>
            <Link to ={'/about/'}><Sticker_Words /></Link>
          </div>

          <div
            style={{
              width:'50%',
            }}>
            <HomeItem item={menuItems[2]} index={3} />
          </div>


          <div
            style={{
              width:'50%',
            }}>
            <HomeItem item={menuItems[3]} index={4} />
            <HomeItem item={menuItems[4]} index={5} />
          </div>

          <div
            style={styleSVG}>
            <Link to={'/student-resources/'}><Sticker_Student /></Link>
          </div>

          <div
            style={styleSVG}>
            <Link to={'/upcoming-events/'}><Sticker_Upcoming /></Link>
          </div>

          <div
            style={{
              width:'50%',
            }}>
            <HomeItem item={menuItems[5]} index={6} />
          </div>

          <div
            style={{
              width:'50%',
              display: 'flex',
              flexFlow: 'column',
              flexWrap: 'nowrap',
            }}>

            <HomeItem item={menuItems[6]} index={7} />

            <div
              style={{
                marginTop: '5vh',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-around'
              }}>
              <a href="mailto:matterns@newschool.edu?subject=Hi Shannon!"><Sticker_Email /></a>
              <a href="https://wordsinspace.net/shannon/wp-content/uploads/2019/09/matterncv2019.pdf"><Sticker_CV /></a>
              <a href="https://pinboard.in/u:shannon_mattern"><Sticker_Pinboard /></a>
            </div>
          </div>

      </div>
      <Footer />
    </Home >
  )
}
