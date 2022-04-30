import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const ListImage = ({title, thumbnail, isTagMode}) => {
  return (
    <div>
      {!isTagMode && <GatsbyImage image={thumbnail} alt={title} key={1} />}
      {isTagMode && <img src={thumbnail} alt={title} key={1} />}
    </div>
  )
}

export default ListImage
