import React from "react"
import Img from "gatsby-image"

const HomeImage = ({title, thumbnail}) => {
  return (
    <div 
	    style={{
	    	flexBasis: '40%', 
	    	alignSelf: 'flex-end'
	    }}>
      <Img fluid={thumbnail} alt={title} />
    </div>
  )
}

export default HomeImage
