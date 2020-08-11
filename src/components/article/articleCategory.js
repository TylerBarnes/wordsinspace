import React from "react"
import {Link} from "gatsby"

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"

const ArticleCategory = ({categories}) => {
  const category = categories?.nodes[0]?.name.toLowerCase()
  
  const breakpoint = useBreakpoints()
  const {mobileTaxonomyMargins} = getResponsiveReaderVars(breakpoint)

  return (
		<div 
			style={{
				margin: mobileTaxonomyMargins,
			}}
	    className={`${category} reader`}> 
	    <Link to={`/${category}`}>{category}</Link>
	  </div>
  )
}

export default ArticleCategory