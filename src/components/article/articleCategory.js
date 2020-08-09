import React from "react"
import {Link} from "gatsby"

const ArticleCategory = ({categories}) => {
  const category = categories?.nodes[0]?.name.toLowerCase()
  return (
		<div
	    className={`${category} reader`}
      style={{
        margin: '0 5px', // changing this to 50px does somthing funny to Related
      }}>
	    <Link to={`/${category}`}>{category}</Link>
	  </div>
  )
}

export default ArticleCategory
