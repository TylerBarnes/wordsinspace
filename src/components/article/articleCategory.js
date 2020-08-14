import React from "react"
import {Link} from "gatsby"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveReaderVars} from "../../utils/dom"

const ArticleCategory = ({categories}) => {
  const category = categories?.nodes[0]?.name.toLowerCase()
  
  const breakpoints = useBreakpoint()
  const {mobileTaxonomyMargins} = getResponsiveReaderVars(breakpoints)

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
