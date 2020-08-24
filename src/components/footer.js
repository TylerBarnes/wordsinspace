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
      marginLeft: '15px',
    }}>
      <div
      	style={footerStyles}
  	    className="metadata">
        Copyright All Rights Reserved © 2020
      </div>
      <div style={{
        margin: '10vh 0vh 1vh 0',
        width: '100%',
        textAlign: 'right',
      }}>
	      <Link to={'/colophon'} className="metadata"><Colophon id='sticker-colophon' /></Link>
      </div>
    </div>

  )
}

export default Footer
