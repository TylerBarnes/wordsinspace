import React from "react"
import Img from "gatsby-image"

const ListImageComponent = ({title, thumbnail, isTagMode}) => {
  return (
    <div>
      {!isTagMode && <Img fluid={thumbnail} alt={title} />}
      {isTagMode && <img src={thumbnail} alt={title} />}
    </div>
  )
}

export default ListImageComponent