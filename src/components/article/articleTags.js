import React from "react"

const ArticleTags = ({tags}) => {
  return (
		<div
      style={{
        alignSelf: 'flex-start',
        margin: '-4px 5px -4px 20px'
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

export default ArticleTags