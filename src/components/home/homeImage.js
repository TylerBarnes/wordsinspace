import React from "react"
import Img from "gatsby-image"

const HomeImage = ({title, thumbnail}) => {
  return (
    <div 
	    style={{
	    	flexBasis: '40%', 
	    }}>
      <Img fluid={thumbnail} alt={title} />
    </div>
  )
}

export default HomeImage
