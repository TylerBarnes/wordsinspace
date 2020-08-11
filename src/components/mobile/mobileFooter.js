import React from "react"
import {Link} from "gatsby" 

import Circle_mobile_footer from '../../images/assets/circle_mobile_footer.svg'

const MobileFooter = () => {
  return (
    <div 
    	style={{
	    	borderTop: '0.5px solid #513bfd',
        paddingTop: '10px',
        paddingBottom: '10px',
        margin: '10px auto',
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '80%'
	    }}>
      
      <div 
        style={{
          alignSelf: 'flex-start',
          display: 'flex',
          flexFlow: 'column',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}>
        <div style={{margin: '6px 0'}} className='metadata'> 
          <a href="mailto:matterns@newschool.edu?subject=Hi Shannon!">email me</a> 
        </div>

        <div style={{margin: '6px 0'}}  className='metadata'> 
          <a href="https://twitter.com/shannonmattern">twitter</a> 
        </div>      

        <div style={{margin: '6px 0'}}  className='metadata'> 
          <a href="https://pinboard.in/u:shannon_mattern">pinboard</a> 
        </div>

        <div style={{margin: '6px 0'}}  className='metadata'> 
          <a href="https://wordsinspace.net/shannon/wp-content/uploads/2019/09/matterncv2019.pdf">CV</a> 
        </div>      

        <div style={{margin: '6px 0'}}  className='metadata'> 
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
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        
        <Link to={'/about'}><Circle_mobile_footer /></Link>
        
        <div 
          className='metadata' 
          style={{
            textAlign: 'right',
            marginTop: '5px',
            alignSelf: 'flex-end'
          }}>
          Copyright All Rights Reserved © 2020
        </div>
      </div>
    </div>
  )
}

export default MobileFooter