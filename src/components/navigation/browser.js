import React from "react"
import {Link} from "gatsby" 

const Browser = (props) => {

  return (
    <div 
	    style={{
				border: '1px solid',
				height: '100vh', 
				minWidth: '3vw', 
				writingMode: 'vertical-rl',
		  	transform: 'rotate(180deg)',
		  	whiteSpace: 'wrap', 
		  	textAlign: 'right',
		  	textTransform: 'uppercase',
	    	padding: '5px',
	    }}>
      Browser
    </div>
   )
}

export default Browser