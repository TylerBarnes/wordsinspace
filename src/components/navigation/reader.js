import React from "react"
import {Link} from "gatsby" 

const Reader = (props) => {

	// Home: Reader is collapsed to the right and inactive?

	// Category: Reader is collapsed to the right

	// Browser + Reader: Reader is expanded half width

	// Reader view: Reader is expanded full width

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
			Reader
    </div>
   )
}

export default Reader