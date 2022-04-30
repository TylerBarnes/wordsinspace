import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const HomeImage = ({title, thumbnail}) => {

  return (
    <div
	    style={{
	    	flexBasis: '40%',
	    }}>
      <GatsbyImage image={thumbnail} alt={title} />
    </div>
  )
}

export default HomeImage
