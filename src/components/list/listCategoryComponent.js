import React from "react"
import {Link} from "gatsby" 
import Img from "gatsby-image"

const ListCategoryComponent = ({category, invertedTheme}) => {
  return (
    <div 
      className={category}
      style={{
        margin: '0 0.2vw', 
        fontSize: '0.8rem',
        alignSelf: 'flex-start'
      }}> 
      {category}
    </div>
  )
}

export default ListCategoryComponent