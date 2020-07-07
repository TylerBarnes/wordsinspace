import React from "react"
import {Link } from "gatsby" 

const TagsMenu = (props) => {
	if(!props) return null
  
  return (
     <aside style={{
      alignSelf: 'flex-start',
      textAlign: 'left',
			fontSize: '0.9rem',
     }}>
     		Tags
	      {props.tags.map( tag => (
					<li 
						key={tag.name}
						style={{
			      	margin: '10px auto',
            	listStyle: 'none',
						}}		
					>
						<Link to={tag.slug} state={{ fromMain: true }}>
		          {tag.name} [{tag.posts.nodes.length+tag.pages.nodes.length}]
		        </Link>
					</li>
	     	))}
     </aside>
   )
}

export default TagsMenu 