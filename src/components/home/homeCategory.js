import React from "react"
import {Link} from "gatsby"

const HomeCategory = ({category}) => {
  return (
    <Link to={'/' + category.toLowerCase()}>
      <div className={category.toLowerCase()}>
        {category}
      </div>
    </Link>
  )
}

export default HomeCategory
