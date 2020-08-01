import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Title from '../components/title'
import Search from '../components/search'

import '../styles/layout.css'
import '../styles/addedStyles.css'

const Browser = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row nowrap',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
      }}
    >
      {/* ----------------------------Left---------------------------- */}
      <div
        onMouseEnter={e => setIsHovered(true)}
        onMouseLeave={e => setIsHovered(false)}
        style={{
          border: '1px solid',
          alignSelf: 'flex-start',
          height: '100vh',
          minWidth: '3vw',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          padding: '10px',
          textAlign: 'right',
          background: !isHovered ? '#fff' : '#ccc',
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
        {/* ----------------------------Top ---------------------------- */}
        <div
          style={{
            border: '1px solid',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '10px',
            minHeight: '3vw',
            textTransform: 'uppercase',
          }}
        >
          <div>Browser</div>
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
