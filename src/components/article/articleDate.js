import React from "react"

const ArticleDate = ({date}) => {
  return (
		<div 
	    style={{
	      margin: '1vh 0',
	      fontSize: '1rem',
	      lineHeight: '1rem',
	      border: '1px solid #ccc'
	    }}>
	    {date && date.slice(0,4)}
	  </div>
  )
}

export default ArticleDate