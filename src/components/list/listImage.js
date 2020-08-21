import React from "react"
import Img from "gatsby-image"

const ListImage = ({title, thumbnail, isTagMode}) => {
  return (
    <div>
      {!isTagMode && <Img fluid={thumbnail} alt={title} key={1} />}
      {isTagMode && <img src={thumbnail} alt={title} key={1} />}
    </div>
  )
}

export default ListImage
