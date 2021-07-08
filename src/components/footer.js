import React from "react"
import {Link} from "gatsby"
import Colophon from '../images/assets/colophon.svg'

import {footerStyles} from "../utils/dom"

const Footer = () => {

  return (
    <div style={{
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingRight: '50px',
      paddingLeft: '15px',
    }}>
      <div
      	style={footerStyles}
  	    className="metadata">
        © Please credit me if you use my work and consult with me before reusing copyrighted work :)
      </div>
      <div style={{
        margin: '10vh 0vh 1vh 0',
        width: '100%',
        textAlign: 'right',
      }}>
	      <Link to={'/colophon'} className="metadata"><Colophon id='sticker-colophon' /></Link>
      </div>
      {false && <a href="">Words in Space is the work of Shannon Mattern.</a>}
    </div>
  )
}

export default Footer
