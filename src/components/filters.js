import React from "react"
import {Link} from "gatsby" 

import Tags from "./filters/tags"
import Categories from "./filters/categories"

const Filters = ({tags, selectTags, clearTags, isTagMode}) => {

  return (
    <div 
      style={{
        borderLeft: '1px dotted #513bfd',
        // backgroundImage: 'linear-gradient(to right, #333 10%, rgba(255, 255, 255, 0) 0%)',
        // backgroundPosition: 'left',
        // backgroundSize: '10px 1px',
        // backgroundRepeat: 'repeat-x',
        maxHeight: '92vh',
        textTransform: 'uppercase',
        padding: '0 20px',
        overflow: 'scroll',
        fontWeight: '500',
        width: '250px'
      }}>
      <div>
        <Categories />
        <Tags tags={tags} selectTags={selectTags} clearTags={clearTags} isTagMode={isTagMode} />
      </div>
    </div>
   )
}

export default Filters