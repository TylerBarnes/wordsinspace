import React from "react"
import {Link} from "gatsby"

const ArticleCategory = ({categories}) => {
  const category = categories?.nodes[0]?.name.toLowerCase()
  return (
		<div
	    className={`${category} reader`}
      style={{
        margin: '0 50px',
      }}>
	    <Link to={`/${category}`}>{category}</Link>
	  </div>
  )
}

export default ArticleCategory
