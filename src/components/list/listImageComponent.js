import React from "react"
import Img from "gatsby-image"

const ListImageComponent = ({title, thumbnail, isVisible, isTagMode}) => {
  return (
    <div 
    	style={{
    		width: '200px',
        border: '1px solid #ccc',
    		display: isVisible ? 'block' : 'none',
        right: '0'
    	}}>
      {!isTagMode && <Img fluid={thumbnail} alt={title} />}
      {isTagMode && <img src={thumbnail} alt={title} />}
    </div>
  )
}

export default ListImageComponent
