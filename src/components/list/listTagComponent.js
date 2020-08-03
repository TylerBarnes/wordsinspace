import React from "react"

const ListTagComponent = ({tags}) => {
  return (
    <div
      style={{
        alignSelf: 'flex-start',
      }}> 
      {tags.nodes.map((tag, index_tag) => 
        <span 
          className='tag'
          key={index_tag}>
          {tag.slug}
        </span>
      )}
    </div>
  )
}

export default ListTagComponent