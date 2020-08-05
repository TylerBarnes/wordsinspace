import React, {useRef} from "react"
import PropTypes from "prop-types"
import {useScrollRestoration} from "gatsby" 

import ListItem from "./list/listItem"
import Footer from './footer'

const List = ({loading, items, isTagMode}) => {
  const ulScrollRestoration = useScrollRestoration(`list-component-ul-list`)
  const anchorRef = useRef(null)

  return (
    <div 
      {...ulScrollRestoration}
      style={{
        display: 'flex',
        flexDirection: 'row wrap', 
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        maxHeight: '92vh',
        overflow: 'auto',
        width: '100%'
      }}>

        {/* ---------------- LOADING ---------------- */}
        {loading && 
          <ul>
            <div 
            style={{
              width: '75vw',
              height: 'auto',
              minHeight: '150px',
            }} 
            className='interface'>
              FILTERING TAGS...
            </div>
          </ul>
        }
        
        {/* ---------------- LIST ---------------- */}
        {!loading &&
          <>
            <ul>
              <div ref={anchorRef}></div>
              {items && items.map((item, index) => (
                <ListItem 
                  key={index}
                  item={item} 
                  isTagMode={isTagMode}
                  invertedTheme={false}
                  /> 
              ))}
              <Footer />
            </ul>
            <button 
              style={{
                position: 'fixed',
                right: '230px',
                top: '10vh',
                display: 'none'
              }}
              onClick={window.scrollTo(0,500)}>
              scroll to top
            </button>
          </>
        }
    </div>
   )
}


List.propTypes = {
  items: PropTypes.array,
}

List.defaultProps = {
  items: [],
}

export default List