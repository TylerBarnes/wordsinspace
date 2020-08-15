import React from "react"

const MobileTags = ({tags, mobileReaderWidth}) => {

  return (
		<div
      style={{
        alignSelf: 'flex-start',
        display: 'inline-block',
        width: mobileReaderWidth, 
        margin: '0 auto'
      }}> 
      {tags.nodes.map((tag, index_tag) => 
        <span 
          style={{
            margin: '5px 5px 5px 0'
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