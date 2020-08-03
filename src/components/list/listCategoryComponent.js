import React from "react"
import Img from "gatsby-image"

const ListCategoryComponent = ({category}) => {

  return (
    <div 
      className={category.toLowerCase()}
      style={{
        margin: '0 0.2vw', 
        fontSize: '0.8rem',
        color: '#aaa',
        alignSelf: 'flex-start'
      }}> 
      {category}
    </div>
  )
}

export default ListCategoryComponent