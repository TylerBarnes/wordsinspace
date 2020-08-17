import React from "react"
import TagsInfoBox from '../components/filters/tagsInfoBox'

import Tags from "./filters/tags"
import Categories from "./filters/categories"

const Filters = ({tags, selectTags, clearTags, isTagMode}) => {

  return (
    <div className="filterBar"
      style={{
        borderLeft: '1px dashed #464668',
        maxHeight: 'calc(100vh - 50px)',
        textTransform: 'uppercase',
        padding: '0 1vw',
        overflow: 'hidden',
        fontWeight: '500',
        width: '20vw',
      }}>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
      }}>
        <Categories />
        <TagsInfoBox clearTags={clearTags} isTagMode={isTagMode}/>
        <Tags tags={tags} selectTags={selectTags} clearTags={clearTags} isTagMode={isTagMode} />
      </div>
    </div>
   )
}

export default Filters
