import React from "react"
import {Link} from "gatsby"

import Tags from "./filters/tags"
import Categories from "./filters/categories"

const Filters = ({tags, selectTags, clearTags, isTagMode, clearIndividualTag}) => {

  return (
    <div className="filterBar"
      style={{
        borderLeft: '1px dashed #513bfd',
        maxHeight: '92vh',
        textTransform: 'uppercase',
        padding: '0 1vw',
        overflow: 'hidden',
        fontWeight: '500',
        width: '20vw',
      }}>
      <div>
        <Categories />
        <Tags tags={tags} selectTags={selectTags} clearTags={clearTags} isTagMode={isTagMode} clearIndividualTag={clearIndividualTag} />
      </div>
    </div>
   )
}

export default Filters
