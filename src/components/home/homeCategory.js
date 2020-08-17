import React from "react"
import {Link} from "gatsby"

const HomeCategory = ({category}) => {
  const isClasses = (category === 'classes')
  
  return (
    <Link to={isClasses ? '/teaching' : '/' + category.toLowerCase()}>
      <div className={category.toLowerCase()}>
        {category}
      </div>
    </Link>
  )
}

export default HomeCategory
