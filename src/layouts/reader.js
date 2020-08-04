import React, {useState} from "react"
import {Link} from "gatsby" 
import PropTypes from "prop-types"

import Title from "../components/title"

import "../styles/layout.css"
import "../styles/global.css"
import "../styles/reader.css"

const Reader = ({children}) => {
  const [isBrowserHovered, setBrowser] = useState(false);
  const [isTitleHovered, setTitle] = useState(false);
  
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row nowrap', 
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        background: 'rgba(255, 145, 83, 0.13)',
      }}>

      {/* ----------------------------WORDS IN SPACE---------------------------- */}
      <div 
        onMouseEnter={e=>setTitle(true)}
        onMouseLeave={e=>setTitle(false)}
        style={{
          alignSelf: 'flex-start',
          height: '100vh',
          width: '60px',
          writingMode: 'vertical-rl',
          transform: 'rotate(0deg)',
          textAlign: 'left',
          paddingRight: '20px'
        }}>
        <Title />
      </div>      

      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', 
          flexGrow: '1', 
        }}>
        {/* ----------------------------BROWSER---------------------------- */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            textTransform: 'uppercase',
            height: '60px',
        }}>
          <div 
            className='interface'
            style={{
              marginLeft: '30px',
              marginTop: '15px',
            }}>
            <Link to={'/work'}>◀️ BROWSER</Link>
          </div>
        </div>

        {/* ----------------------------Main---------------------------- */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
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