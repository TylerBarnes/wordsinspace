import React from "react"
import {Link} from "gatsby"

const ArticleCategory = ({categories}) => {
  const category = categories?.nodes[0]?.name.toLowerCase()
  return (
		<div 
	    className={`${category} reader`}
      style={{
        alignSelf: 'center',
        margin: '0 10px'
      }}> 
	    <Link to={`/${category}`}>{category}</Link>
	  </div>
  )
}

export default ArticleCategory