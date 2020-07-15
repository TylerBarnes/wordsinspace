import React from "react"
import {Link} from "gatsby" 
import {usePosts} from "../hooks/usePosts"
import {usePages} from "../hooks/usePages"

const Browser = (props) => {
	const data = [...usePages(), ...usePosts()]

	// Home = Browser is collapsed to the right and inactive?

  // Category = Browser is expanded to full width, shows Search

  // Browser + Reader = Browser is expanded to half width, shows Search

  // Reader view = Browser is collapsed to the left, Search is hidden


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