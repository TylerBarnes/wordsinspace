import React from "react"
import {Link} from "gatsby" 
import {usePosts} from "../hooks/usePosts"
import {usePages} from "../hooks/usePages"

const Browser = (props) => {
	const data = [...usePages(), ...usePosts()]
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