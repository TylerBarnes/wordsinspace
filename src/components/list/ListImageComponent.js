import React from "react"
import Img from "gatsby-image"

const ListImageComponent = ({thumbnail, isVisible}) => {

  return (
    <div 
    	style={{
    		width: '200px',
        border: '1px solid #ccc',
    		display: isVisible ? 'block' : 'none',
        right: '0'
    	}}>
    	<Img
      	fluid={thumbnail}
      	alt={'thumbnail'}
      	/>
    </div>
  )
}

export default ListImageComponent