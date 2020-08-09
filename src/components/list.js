import React from "react"
import PropTypes from "prop-types"
import {useScrollRestoration} from "gatsby" 

import useBreakpoints from '../hooks/useBreakpoint';
import {getResponsiveBrowserVars} from "../utils/dom"

import ListItem from "./list/listItem"
import Footer from './footer'
import MobileFooter from './mobile/mobileFooter'

const List = ({loading, items, isTagMode}) => {
  const breakpoint = useBreakpoints();
  const {mobileList, listWidth, listTitleWidth} = getResponsiveBrowserVars(breakpoint)

  const ulScrollRestoration = useScrollRestoration(`list-component-ul-list`)

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
        // width: '100%'

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
          <ul>
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
            {!mobileList && <Footer />}
            {mobileList && <MobileFooter />}
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