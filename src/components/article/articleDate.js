import React from "react"
import {getMonthName} from "../../utils/helpers"

import useBreakpoints from '../../hooks/useBreakpoint';
import {getResponsiveReaderVars} from "../../utils/dom"

const ArticleDate = ({date}) => {
	const monthIndex = parseInt(date.slice(5,7))
  const monthName = getMonthName(monthIndex)
  const year = date.slice(0,4)
  
  const breakpoint = useBreakpoints(typeof window !== `undefined`)

  const {mobileTaxonomyMargins} = getResponsiveReaderVars(breakpoint)

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