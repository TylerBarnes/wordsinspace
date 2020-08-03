import React from "react"

const ListTagComponent = ({tags}) => {
  return (
    <div
      className='interface'
      style={{
        margin: '0 0.2vw',
        fontSize: '0.8rem',
        alignSelf: 'flex-start'
      }}> 
      {tags.nodes.map((tag, index_tag) => 
        <div 
          key={index_tag}>
          {tag.slug}
        </div>
      )}
    </div>
  )
}

export default ListTagComponent