import React from "react"
import {getMonthName} from "../../utils/helpers"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {getResponsiveReaderVars} from "../../utils/dom"

const ArticleDate = ({date}) => {
	const monthIndex = parseInt(date.slice(5,7))
  const monthName = getMonthName(monthIndex)
  const year = date.slice(0,4)
  
  const breakpoints = useBreakpoint()
  const {mobileTaxonomyMargins} = getResponsiveReaderVars(breakpoints)

  return (
		<div 
			style={{
				margin: mobileTaxonomyMargins,
				alignSelf: 'flex-start',
			}}
			className='date'>
	    {monthName} {year} 
	  </div>
  )
}

export default ArticleDate