import React from "react"
import {Link} from "gatsby"

const ListCategory = ({category}) => {
  return (
    <Link
      to={"/" + category.toLowerCase()}
      >
      <div
      className={category}
      style={{
        margin: '1px 5px 0px 0px',
        alignSelf: 'flex-start'
      }}>
      {category}
    </div>
    </Link>
  )
}

export default ListCategory
