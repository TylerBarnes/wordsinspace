import React from "react"
import {Link} from "gatsby" 

import Circle_mobile_footer from '../../images/assets/circle_mobile_footer.svg'

const MobileFooter = () => {
  return (
    <div 
    	style={{
	    	borderTop: '0.5px solid #513bfd',
        marginTop: '10px',
        width: '80%',
	    	padding: '5vh 0',
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
	    }}>
      
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
          <a href="mailto:matterns@newschool.edu?subject=Hi Shannon!">email me</a> 
        </div>

        <div className='metadata'> 
          <a href="https://twitter.com/shannonmattern">twitter</a> 
        </div>      

        <div className='metadata'> 
          <a href="https://pinboard.in/u:shannon_mattern">pinboard</a> 
        </div>

        <div className='metadata'> 
          <a href="https://wordsinspace.net/shannon/wp-content/uploads/2019/09/matterncv2019.pdf">CV</a> 
        </div>      

        <div className='metadata'> 
          <Link to={'/colophon'}>colophon</Link>
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