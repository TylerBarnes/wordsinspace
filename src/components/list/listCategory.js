import React from "react"
import {Link} from "gatsby"

const ListCategory = ({category}) => {
  const isClasses = (category === 'classes') // link classes to teaching

  return (
    <Link
      to={isClasses ? '/teaching' : '/' + category.toLowerCase()}
      >
      <div
      className={category}
      style={{
        margin: '1px 5px 0px 10px',
        alignSelf: 'flex-start'
      }}>
      {category}
    </div>
    </Link>
  )
}

export default ListCategory
