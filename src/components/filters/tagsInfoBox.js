import React, {useState} from "react"

const TagsInfoBox = ({clearTags, isTagMode}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button className='metadata'
    	style={{
				margin: '0',
				padding: '0',
        height: '30px',
				border: 'none',
				background: 'transparent',
				textAlign: 'left',
				color: 'red',
				opacity: isTagMode ? '1' : '0',
        cursor: 'pointer',
        textDecoration: isHovered ? 'underline' : 'none'
    	}}
      onMouseEnter={e=>setIsHovered(true)}
      onMouseLeave={e=>setIsHovered(false)}
    	onClick={clearTags}>
    	CLEAR ALL
    </button>
  )
}

export default TagsInfoBox
