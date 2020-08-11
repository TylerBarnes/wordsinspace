import React from "react"
import { Link } from "gatsby"

import {useTitle} from "../../hooks/useTitle"
import Circle_wordsinspace from '../../images/assets/circle_wordsinspace.svg'

const MobileWordsInSpace = () => {
  const title = useTitle();
  return (
		<div 
      style={{
		    width: '100%',
		    height: '60px',
        display: 'flex',
		    flexFlow: 'row',
		    flexWrap: 'nowrap',
		    alignItems: 'center',
		    justifyContent: 'center',
		  }}>

      <div 
        style={{
        	margin: '10px 10px 0 0',
        	alignSelf: 'center',
        }}>
	      <Link to={'/'}><Circle_wordsinspace /></Link>
	      </div>
        
      <Link
        to='/'
        className='interface'
        style={{
          margin: '0',
        }}
        >
        {title}
      </Link>
    </div> 
  )
}

export default MobileWordsInSpace

