import React from "react"
import {Link } from "gatsby" 

function Tags(props) {
	
  return (
     <aside style={{
      alignSelf: 'flex-start',
      textAlign: 'left',
			width: `40%`,
			fontSize: '0.9rem',
     }}>
	      {props.tags.map( tag => (
					<li 
						key={tag.name}
						style={{
			      	margin: '10px auto',
            	listStyle: 'none',
						}}		
					>
						<Link to={tag.slug}>
		          {tag.name}
		        </Link>
					</li>
	     	))}
     </aside>
   )
}

export default Tags 