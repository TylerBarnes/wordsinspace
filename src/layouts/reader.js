import React, {useState} from "react"
import {Link} from "gatsby" 
import PropTypes from "prop-types"

import LeftNav from '../components/leftNav'
import GlyphLeft from '../images/assets/glyph_left.svg'
import GlyphLeftHover from '../images/assets/glyph_left_hover.svg'

import "../styles/layout.css"
import "../styles/global.css"
import "../styles/reader.css"

const Reader = ({children}) => {
  const [isGlyphHovered, setGlyphHovered] = useState(false)

  const styleWrapper = 
  {
    display: 'flex',
    flexDirection: 'row nowrap', 
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  }
  
  const styleTopBar = 
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    height: '60px',
  }

  return (
    <div className='gradient' style={styleWrapper}>

      {/* ----------------------------WORDS IN SPACE---------------------------- */}
      <LeftNav />      

      {/* ----------------------------CONTAINER---------------------------- */}
      <div style={{width: '100%'}}>
        {/* ----------------------------TOP---------------------------- */}
        <div style={styleTopBar}>
          <div className='interface'>
            <Link to={'/work/'}> 
              <div             
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
        
        <div style={{
          maxHeight: '92vh',
          overflow: 'auto',
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