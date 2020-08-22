import React from "react"
import { Link } from "gatsby"

import {useTitle} from "../hooks/useTitle"
import Circle_wordsinspace from '../images/assets/circle_wordsinspace.svg'

const WordsInSpace = () => {
  const title = useTitle();
  return (
		<div className="left-bar"
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

      <div id="wordsinspace"
        style={{
          display: 'flex',
          flexFlow: 'row-reverse',

        }}>
	      <Link
	        to="/"
	        className='interface'
	        style={{
	          marginTop: '20px',
		    		alignSelf: 'flex-end',
	        }}
	     		>
	        {title}
	      </Link>

        <div
          style={{
            marginTop: '11px',
            marginLeft: '6px',
            alignSelf: 'center'
          }}>
          <Link to={'/'}><Circle_wordsinspace id="circle-wordsinspace" /></Link>
        </div>
      </div>
    </div>
  )
}

export default WordsInSpace
