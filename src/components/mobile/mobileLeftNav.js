import React from "react"
import Title from '../title'

const MobileLeftNav = () => {
  return (
		<div 
      style={{
		    alignSelf: 'flex-start',
		    width: '100%',
		    height: '50px',
		    padding: '5px 10px 5px 0px',
		    marginRight: '10px',
		  }}>
        <Title />
      </div> 
  )
}

export default MobileLeftNav

