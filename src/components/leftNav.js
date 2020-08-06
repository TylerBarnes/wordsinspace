import React from "react"
import Title from './title'

const LeftNav = () => {
  return (
		<div 
      style={{
		    alignSelf: 'flex-start',
		    height: '100vh',
		    width: '50px',
		    writingMode: 'vertical-rl',
		    transform: 'rotate(0deg)',
		    textAlign: 'left',
		    paddingRight: '10px',
		    paddingLeft: '0px',
		    paddingTop: '5px',
		  }}>
        <Title />
      </div> 
  )
}

export default LeftNav

