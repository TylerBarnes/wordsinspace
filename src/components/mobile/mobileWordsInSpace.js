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
		    padding: '5px 10px 5px 0px',
        display: 'flex',
		    flexFlow: 'row',
		    flexWrap: 'nowrap',
		    alignItems: 'center',
		    justifyContent: 'space-around',
		  }}>

      <div 
	        style={{
	        	marginTop: '10px',
	        	alignSelf: 'center'
	        }}>
		      <Link to={'/'}><Circle_wordsinspace /></Link>
	      </div>
        
      <Link
        to='/'
        className='interface'
        style={{
          margin: '0',
		    	flexGrow: '0.5'
        }}
        >
        {title}
      </Link>
    </div> 
  )
}

export default MobileWordsInSpace

