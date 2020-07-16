import React from "react"
import PropTypes from "prop-types"
import { Location, useLocation} from '@reach/router';

import {useTitle} from "../hooks/useTitle"
import Title from "../navigation/Title"

import "../../styles/layout.css"
import "../../styles/addedStyles.css"

const Reader = ({children}) => {
  const { href, pathname } = useLocation();
  const title = useTitle();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row nowrap', 
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    }}>

      {/* Left */}
      <div style={{
        border: '1px solid',
        height: '100vh', 
        minWidth: '3vw', 
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        whiteSpace: 'wrap', 
        textAlign: 'right',
        textTransform: 'uppercase',
        padding: '5px',
      }}>
        <Title siteTitle={title} />
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', 
        flexGrow: '1', 
      }}>

        {/* Top */}
        <div
          style={{
            border: '1px solid',
            minHeight: '3vw', 
          }}>
          Reader
        </div>

        {/* Main */}
        <div style={{
          maxHeight: '95vh',
          padding: '20px 10px',
          overflow: 'scroll'
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