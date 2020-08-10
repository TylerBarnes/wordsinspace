import React from "react"
import {Link} from "gatsby" 

import SEO from "../components/seo"
import Home from "../layouts/home"

const NotFoundPage = () => (
  <Home>
    <SEO title="Not found" />
    <div 
	    style={{
				margin: '10vh 0'
	    }}>
    	<div className='home-title'>NOT FOUND</div>
	    <p className='interface'>Sorry, Shannon has not thought of this yet.</p>
	    <p className='interface'><Link to={'/'}>Go back</Link></p>
	    </div>
  </Home>
)

export default NotFoundPage
