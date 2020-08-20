import React, {useState} from "react"

const TagsInfoBox = ({clearTags, isTagMode}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button className='metadata'
    	style={{
				margin: '0',
        height: '25px',
        padding: '0 1vh',
				border: 'none',
				background: 'transparent',
				textAlign: 'left',
				color: 'red',
				display: isTagMode ? 'block' : 'none',
        cursor: 'pointer',
        textDecoration: isHovered ? 'underline' : 'none'
    	}}
      onMouseEnter={e=>setIsHovered(true)}
      onMouseLeave={e=>setIsHovered(false)}
      onKeyPress={clearTags}
    	onClick={clearTags}>
    	CLEAR ALL
    </button>
  )
}

export default TagsInfoBox
