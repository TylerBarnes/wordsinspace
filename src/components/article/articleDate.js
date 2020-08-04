import React from "react"
import {getMonthName} from "../../utils"

const ArticleDate = ({date}) => {
	const monthIndex = parseInt(date.slice(5,7))
  const monthName = getMonthName(monthIndex)
  const year = date.slice(0,4)
  
  return (
		<div 
			className='date'>
	    {monthName} {year} 
	  </div>
  )
}

export default ArticleDate