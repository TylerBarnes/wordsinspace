import React  from "react"
import PropTypes from "prop-types"
import {useScrollRestoration} from "gatsby" 

import useBreakpoints from '../hooks/useBreakpoint';
import {getResponsiveBrowserVars} from "../utils/dom"

import ListItem from "./list/listItem"

const List = ({loading, items, isTagMode}) => {
  const breakpoint = useBreakpoints();
  const {mobileList, listWidth, listTitleWidth} = getResponsiveBrowserVars(breakpoint)

  const ulScrollRestoration = useScrollRestoration(`list-component-ul-list`)

  function handleScrollTop() {
    if (typeof window === `undefined`) return null
    document.getElementById('list').scrollIntoView()
  }

  return (
    <div className="no-scroll"
      {...ulScrollRestoration}
      style={{
        display: 'flex',
        flexDirection: 'row wrap', 
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        maxHeight: '92vh',
        overflow: 'auto',
      }}>
        {/* ---------------- LOADING ---------------- */}
        {loading && 
          <ul>
            <div 
            style={{
              width: listWidth,
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
          <ul
            style={{
              borderBottom: '1px solid #6262F4',
              padding: '15px'
            }}
            id='list'>
            <button 
              style={{
                display: !mobileList ? 'block' : 'none',
                position: 'fixed',
                margin: 0,
                padding: 0,
                left: '78.2vw',
                top: '10vh',
                outline: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '900',
                color: '#6262F4',
                background: 'transparent',
                textTransform: 'uppercase',
                cursor: 'pointer',
                zIndex: '2'
              }} 
              onClick={handleScrollTop}>
              <div 
                className='metadata'
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}>
                scroll to top
                &#x2192;
              </div>
            </button>
            
            {items && items.map((item, index) => (
              <ListItem 
                key={index}
                item={item} 
                mobileList={mobileList}
                isTagMode={isTagMode}
                invertedTheme={false}
                listWidth={listWidth}
                listTitleWidth={listTitleWidth}
                /> 
            ))}
          </ul>
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