import React from "react"
import PropTypes from "prop-types"
import {useScrollRestoration} from "gatsby" 

import ListItem from "./list/listItem"
import Footer from './footer'

const List = ({loading, items, isTagMode}) => {
  const ulScrollRestoration = useScrollRestoration(`list-component-ul-list`)

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
      }}>
        {/* ---------------- LOADING ---------------- */}
        {loading && 
          <h4 
            style={{
              padding: '5px'
            }}>
            FILTERING CONTENT...
          </h4>
        }
        
        {/* ---------------- LIST ---------------- */}
        {!loading &&
          <ul>
          {items && items.map((item, index) => (
            <ListItem 
              key={index}
              item={item} 
              isTagMode={isTagMode}
              /> 
          ))}
          <Footer />
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