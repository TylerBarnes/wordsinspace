import React from "react"
import Img from "gatsby-image"

const ListCategoryComponent = ({category}) => {

  return (
    <div 
      style={{
        margin: '0 0.2vw', 
        fontSize: '0.8rem',
        color: '#aaa',
        border: '1px solid #ccc',
      }}> 
      {category} 
    </div>
  )
}

export default ListCategoryComponent