import React from "react"

const ListTagComponent = ({item}) => {
  return (
    <div
      style={{
      margin: '0 0.2vw',
      fontSize: '0.8rem'
      }}> 
      {item.tags && item.tags.nodes.map((tag, index_tag) => 
        <div 
          key={index_tag}>
          {tag.slug}
        </div>
      )}
    </div>
  )
}

export default ListTagComponent