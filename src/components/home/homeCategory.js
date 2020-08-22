import React from "react"
import {Link} from "gatsby"

const HomeCategory = ({category}) => {
	console.log(category)
  return (
    <Link to={category.toLowerCase()}>
      <div className={category.toLowerCase()}>
        {category}
      </div>
    </Link>
  )
}

export default HomeCategory
