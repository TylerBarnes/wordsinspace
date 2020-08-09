import React from "react"

import Circle_mobile_footer from '../../images/assets/circle_mobile_footer.svg'

const MobileFooter = () => {
  return (
    <div 
    	style={{
	    	borderTop: '0.5px solid #513bfd',
	    	padding: '5vh 0',
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
	    }} >
      
      <div 
        style={{
          alignSelf: 'flex-start',
          display: 'flex',
          flexFlow: 'column',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <div className='metadata'> 
          <a href="mailto:matterns@newschool.edu?subject=Hi Shannon!">EMAIL</a> 
        </div>

        <div className='metadata'> 
          <a href="">TWITTER</a> 
        </div>      

        <div className='metadata'> 
          <a href="!">PINBOARD</a> 
        </div>

        <div className='metadata'> 
          <a href="">CV</a> 
        </div>      

        <div className='metadata'> 
          <a href="">COLOPHON</a> 
        </div>
      </div>

      <div 
        style={{
          alignSelf: 'flex-end',
          maxWidth: '50%',
          display: 'flex',
          flexFlow: 'column',
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Circle_mobile_footer />
        
        <div 
          className='metadata' 
          style={{
            textAlign: 'center',
            marginTop: '5px'
          }}>
          Copyright All Rights Reserved © 2020
        </div>

      </div>
    </div>
  )
}

export default MobileFooter