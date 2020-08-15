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
		    flexFlow: 'row-reverse',
		    flexWrap: 'nowrap',
		    justifyContent: 'flex-end',
		  }}>

	      <Link
	        to="/"
	        className='interface'
          id="wordsinspace"
	        style={{
	          marginTop: '20px',
		    		alignSelf: 'flex-end',
	        }}
	     		>
	        {title}
	      </Link>

        <div
          style={{
            marginTop: '13px',
            marginLeft: '6px',
            alignSelf: 'center'
          }}>
          <Link to={'/'}><Circle_wordsinspace id="circle-wordsinspace" /></Link>
        </div>
      </div>
  )
}

export default WordsInSpace
