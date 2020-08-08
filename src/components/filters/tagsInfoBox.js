import React from "react"

const TagsInfoBox = ({tags, clearTags, isTagMode}) => {
  return (
    <button className='metadata'
    	style={{
				margin: '0',
				padding: '0',
				border: 'none',
				background: 'transparent',
				textAlign: 'left',
				color: 'red',
				display: isTagMode ? 'block' : 'none'
    	}}
    	onClick={clearTags}>
    	CLEAR
    </button>
  )
}

export default TagsInfoBox