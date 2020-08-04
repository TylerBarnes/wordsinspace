import React from "react"

const ArticleTags = ({tags}) => {
  return (
		<div
      style={{
        alignSelf: 'flex-start',
        marginLeft: '10px'
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