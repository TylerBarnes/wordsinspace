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
    }}>
      <div
      	style={footerStyles}
  	    className="metadata">
        Copyright All Rights Reserved © 2020
      </div>
      <div style={{
        margin: '10vh 2vh 1vh 0',
        width: '100%',
        textAlign: 'right',
      }}>
	      <Link to={'/colophon'} className="metadata"><Colophon /></Link>
      </div>
    </div>

  )
}

export default Footer
