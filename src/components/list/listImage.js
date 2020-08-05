import React from "react"
import Img from "gatsby-image"

const ListImage = ({title, thumbnail, isTagMode}) => {
  return (
    <div>
      {!isTagMode && <Img fluid={thumbnail} alt={title} />}
      {isTagMode && <img src={thumbnail} alt={title} />}
    </div>
  )
}

export default ListImage
