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
		          {tag.name} 
		        </Link>
		        <div>
		        	{tag.posts.nodes.length > 0 ? ` ${tag.posts.nodes.length} post(s)` : null}
		        </div>
		        <div>
		          {tag.pages.nodes.length > 0 ? ` ${tag.pages.nodes.length} page(s)` : null}
	          </div>
					</li>
	     	))}
     </aside>
   )
}

export default TagsMenu 