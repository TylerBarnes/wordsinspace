import React from "react"
import {Link} from "gatsby" 
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Search from "./search"

const Top = (props) => {
	const data = useStaticQuery(graphql`
	    query SiteTitleQuery {
	      site {
	        siteMetadata {
	          title
	        }
	      }
	    }
	  `)

  return (
    <div 
	    style={{
	    	border: '1px solid',
	    	display: 'flex',
	    	flexDirection: 'row',
	    	justifyContent: 'space-between', 
	    	padding: '10px',
				minHeight: '3vw', 
	    }}>
      <Header siteTitle={data.site.siteMetadata.title} />      
      <Search />
    </div>
   )
}

export default Top