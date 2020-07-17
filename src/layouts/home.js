import React, {useState} from "react"
import {Link} from "gatsby" 
import PropTypes from "prop-types"

import {useTitle} from "../hooks/useTitle"
import Title from "../components/navigation/title"

import "../styles/layout.css"
import "../styles/addedStyles.css"

const Home = ({children}) => {
  const title = useTitle();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row nowrap', 
        alignItems: 'flex-start',
        justifyContent: 'space-around',
      }}>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', 
          flexGrow: '1', 
        }}>
        {/* ----------------------------Top---------------------------- */}
        <div 
            style={{
            border: '1px solid',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', 
            padding: '10px',
            minHeight: '3vw', 
          }}>
          <Title siteTitle={title} />      
        </div>

        {/* ----------------------------Main---------------------------- */}
        <div 
          style={{
            maxHeight: '95vh',
            padding: '20px 10px',
            overflow: 'scroll'
          }}>
          {children}
        </div>
      </div>

      {/* ----------------------------Right---------------------------- */}
      <Link to='/work'>
        <div
          onMouseEnter={e=>setIsHovered(true)}
          onMouseLeave={e=>setIsHovered(false)}
          style={{
            border: '1px solid',
            height: '100vh', 
            minWidth: '3vw', 
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            whiteSpace: 'wrap', 
            textAlign: 'right',
            textTransform: 'uppercase',
            padding: '10px',
            background: !isHovered ? '#fff' : '#ccc',
          }}>
         Browser
        </div>
      </Link>

      {/* ----------------------------Right---------------------------- */}
      {/*<div
         style={{
            border: '1px solid',
            height: '100vh', 
            minWidth: '3vw', 
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            textAlign: 'right',
            textTransform: 'uppercase',
            padding: '10px',
          }}>
          Reader
        </div>*/}
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home