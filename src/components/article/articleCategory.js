import React from "react"
import {Link} from "gatsby"

const ArticleCategory = ({categories}) => {
  const category = categories?.nodes[0]?.name.toLowerCase()
  
  return (
		<div 
	    className={`${category} reader`}> 
	    <Link to={`/${category}`}>{category}</Link>
	  </div>
  )
}

export default ArticleCategory