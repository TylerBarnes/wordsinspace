import React from "react"
import {Link} from "gatsby" 

import SEO from "../components/seo"
import Home from "../layouts/home"

const NotFoundPage = () => (
  <Home>
    <SEO title="404: Not found" />
    <div 
	    style={{
				margin: '10vh 0'
	    }}>
    	<h3>NOT FOUND</h3>
	    <p style={{margin: '2vh 0'}}>Sorry, Shannon has not thought of this yet.</p>
	    <Link to={'/'}>back</Link>
	    </div>
  </Home>
)

export default NotFoundPage
