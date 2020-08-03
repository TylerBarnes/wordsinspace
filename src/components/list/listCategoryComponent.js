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
        color: '#aaa',
        alignSelf: 'flex-start'
      }}> 
      <Link to={`/${category.toLowerCase()}`}>{category}</Link>
    </div>
  )
}

export default ListCategoryComponent