import React from "react"
import {Link } from "gatsby" 

const TagsMenu = (props) => {
	if(!props) return null
  
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
						<Link to={tag.slug} state={{ fromTags: true }}>
		          {tag.name}
		        </Link>
					</li>
	     	))}
     </aside>
   )
}

export default TagsMenu 