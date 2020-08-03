import React from "react"

const ListTagComponent = ({tags, invertedTheme}) => {
  return (
    <div
      style={{
        alignSelf: 'flex-start',
      }}> 
      {tags.nodes.map((tag, index_tag) => 
        <span 
          className={invertedTheme ? 'tag tag-inverted' : 'tag'}
          key={index_tag}>
          {tag.slug}
        </span>
      )}
    </div>
  )
}

export default ListTagComponent