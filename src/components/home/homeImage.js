import React from "react"
import Img from "gatsby-image"

const HomeImage = ({title, thumbnail, isEven}) => {
  return (
    <div 
	    style={{
	    	flexBasis: '100%', 
	    	alignSelf: isEven ? 'flex-start' : 'flex-end'
	    }}>
      <Img fluid={thumbnail} alt={title} />
    </div>
  )
}

export default HomeImage
