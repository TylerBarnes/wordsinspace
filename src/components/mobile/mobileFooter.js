import React from "react"

import Sticker_WordsMobile from '../../images/assets/Sticker_WordsMobile.svg'

const MobileFooter = () => {
  return (
    <div 
    	style={{
	    	borderTop: '0.5px solid #513bfd',
        marginTop: '5vh',
	    	padding: '5vh 0'
	    }} 
	    className="metadata">
      Copyright All Rights Reserved © 2020
      <Sticker_WordsMobile />
    </div>
  )
}

export default MobileFooter