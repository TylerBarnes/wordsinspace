import React from "react"

const HomeCategory = ({category}) => {
  return (
    <div className={category.toLowerCase()}> 
      {category}
    </div>
  )
}

export default HomeCategory