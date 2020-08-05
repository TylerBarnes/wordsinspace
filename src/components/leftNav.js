import React from "react"
import Title from './title'

const LeftNav = () => {
  return (
		<div 
      style={{
		    alignSelf: 'flex-start',
		    height: '100vh',
		    width: '60px',
		    writingMode: 'vertical-rl',
		    transform: 'rotate(0deg)',
		    textAlign: 'left',
		    paddingRight: '20px'
		  }}>
        <Title />
      </div> 
  )
}

export default LeftNav

