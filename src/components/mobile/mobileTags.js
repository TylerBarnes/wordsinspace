import React from "react"
import {Link} from "gatsby" 

const MobileTags = ({tags}) => {

  return (
		<div
      style={{
        alignSelf: 'flex-end',
        border: '1px solid',
        display: 'flex',
        flexDirection: 'row nowrap',
        overflowX: 'scroll', 
      }}> 
      {tags.nodes.map((tag, index_tag) => 
        <span 
          style={{
            marginRight: '10px'
          }}
          className='tag'
          key={index_tag}>
          {tag.slug}
        </span>
      )}
    </div>
   )
}

export default MobileTags 