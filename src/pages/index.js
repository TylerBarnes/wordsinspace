import React from 'react'

import SEO from '../components/seo'
import HomeItem from '../components/home/homeItem'
import Home from '../layouts/home'
import {useSiteMenuData} from '../hooks/useSiteMenuData'

import Sticker_Email from '../images/assets/Sticker_Email.svg'
import Sticker_Browse from '../images/assets/Sticker_Browse.svg'
import Sticker_CV from '../images/assets/Sticker_CV.svg'
import Sticker_Student from '../images/assets/Sticker_Student.svg'
import Sticker_Words from '../images/assets/Sticker_Words.svg'
import Sticker_Pinboard from '../images/assets/Sticker_Pinboard.svg'
import Sticker_Twitter from '../images/assets/Sticker_Twitter.svg'
import Sticker_Upcoming from '../images/assets/Sticker_Upcoming.svg'


import '../styles/home.css'

export default function HomePage() {
  const menuData = useSiteMenuData();

  if (!menuData) return null
  
  const menuItems = menuData[0]?.menuItems?.nodes
  
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
          alignContent: 'stretch'
        }}>

          <div 
            style={{
              border: '1px solid',
              width: '50%', 
            }}>
            <HomeItem item={menuItems[0]} index={1} />
            <HomeItem item={menuItems[1]} index={2} />
          </div>

          <div 
            style={{
              border: '1px solid',
              width:'50%',
            }}>
            <Sticker_Browse />
          </div>

          <div
            style={{
              border: '1px solid',
              width:'50%',
            }}>
            <Sticker_Words />
          </div>

          <div
            style={{
              border: '1px solid',
              width:'50%',
            }}>
            <HomeItem item={menuItems[2]} index={3} />
          </div>
          
          
          <div 
            style={{
              border: '1px solid',
              width:'50%',
            }}>
            <HomeItem item={menuItems[3]} index={4} />
            <HomeItem item={menuItems[4]} index={5} />
          </div>
          
          <div
            style={{
              border: '1px solid',
              width:'50%',
            }}>
            <Sticker_Student />
          </div>

          <div
            style={{
              border: '1px solid',
              width:'50%',
            }}>
            <Sticker_Upcoming />
          </div>
          
          <div
            style={{
              border: '1px solid',
              width:'50%',
            }}>
            <HomeItem item={menuItems[5]} index={6} />
          </div>

          <div 
            style={{
              border: '1px solid',
              width:'50%',
            }}>

            <HomeItem item={menuItems[6]} index={7} />
            
            <div style={{marginTop: '5vh'}}>
              <Sticker_Email />
              <Sticker_CV />
              <Sticker_Pinboard />
            </div>
          </div>
      </div>
    </Home >
  )
}