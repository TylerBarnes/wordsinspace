import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {useLocation} from '@reach/router'

import Title from '../components/title'
import Search from '../components/search'

import '../styles/layout.css'
import '../styles/global.css'
import '../styles/browser.css'

const Browser = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false)
  const location = useLocation();
  const catName = location.pathname.replace('/', '').replace('/', '')
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row nowrap',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
      }}
    >
      {/* ----------------------------WORDS IN SPACE---------------------------- */}
      <div
        onMouseEnter={e => setIsHovered(true)}
        onMouseLeave={e => setIsHovered(false)}
        style={{
          alignSelf: 'flex-start',
          height: '100vh',
          width: '60px',
          writingMode: 'vertical-rl',
          transform: 'rotate(0deg)',
          textAlign: 'left',
          paddingRight: '20px'
        }}
      >
        <Title />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: '1',
        }}
        >
        {/* ----------------------------BROWSER---------------------------- */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            textTransform: 'uppercase',
            height: '60px',
          }}
          >
          <div 
            className='interface'
            style={{
              marginLeft: '30px',
              marginTop: '15px',
            }}>
            {catName!== 'work' && 
              <div>
                Browsing: <span style={{fontSize: '10px'}} className={catName.toLowerCase()}>{catName}</span>
              </div>
            }
          </div>
          <Search />
        </div>

        {/* ----------------------------Main ---------------------------- */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          >
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
