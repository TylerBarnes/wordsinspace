import React from "react"
import Img from "gatsby-image"

const ListImageComponent = ({item}) => {
  return (
    <div style={{width: '200px'}}>
    	<Img
      	fluid={item.featuredImage.node.localFile.childImageSharp.fluid}
      	alt={item.slug}
      	/>
    </div>
  )
}

export default ListImageComponent