import React from "react"
import Title from './title'

const LeftNav = () => {
  return (
		<div 
      style={{
		    alignSelf: 'flex-start',
		    flexShrink: '0',
		    height: '100vh',
		    width: '50px',
		    writingMode: 'vertical-rl',
		    transform: 'rotate(0deg)',
		    textAlign: 'left',
		    padding: '5px 10px 5px 0px',
		    marginRight: '10px',
		  }}>
        <Title />
      </div> 
  )
}

export default LeftNav

