import React from "react"
import { Link } from "gatsby"

import {useTitle} from "../hooks/useTitle"
import Circle_wordsinspace from '../images/assets/circle_wordsinspace.svg'

const WordsInSpace = () => {
  const title = useTitle();
  return (
		<div 
      style={{
		    alignSelf: 'flex-start',
		    flexShrink: '0',
		    height: '100vh',
		    width: '50px',
		    writingMode: 'vertical-rl',
		    transform: 'rotate(0deg)',
		    display: 'flex',
		    flexFlow: 'row',
		    flexWrap: 'nowrap',
		    justifyContent: 'flex-start',
		  }}>
        
        <div 
	        style={{
	        	marginTop: '10px',
	        	alignSelf: 'center'
	        }}>
		      <Link to={'/'}><Circle_wordsinspace /></Link>
	      </div>
	        
	      <Link
	        to="/"
	        className='interface'
	        style={{
	          marginTop: '40px',
		    		alignSelf: 'flex-end',
	        }}
	     		>
	        {title}
	      </Link>
      </div> 
  )
}

export default WordsInSpace

