import React, {useState} from "react"
import PropTypes from "prop-types"
import {useScrollRestoration} from "gatsby" 

import ListItem from "./list/listItem"

const List = ({loading, items}) => {
  const [isClicked, setIsClicked] = useState(false);
  const ulScrollRestoration = useScrollRestoration(`list-component-ul-list`)

  const togglePreview = (e, index) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  }  

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
        width: '80vw'
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
                onClick={e=>togglePreview(e,index)}
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