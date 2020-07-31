import React from "react"
import Img from "gatsby-image"

const ListImageComponent = ({thumbnail}) => {
  return (
    <div style={{width: '200px'}}>
    	<Img
      	fluid={thumbnail}
      	alt={'thumbnail'}
      	/>
    </div>
  )
}

export default ListImageComponent