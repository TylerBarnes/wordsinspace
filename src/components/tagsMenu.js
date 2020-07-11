import React, {useMemo} from "react"
import {Link } from "gatsby" 

function filterTags(tags) {
	return tags.sort((a, b) => a.posts.nodes.length + a.pages.nodes.length < b.posts.nodes.length + b.pages.nodes.length ? 1 : -1)
}

const TagsMenu = (props) => {
	const tags = useMemo(()=> filterTags(props.tags), [props.tags]) 
  
  return (
     <aside style={{
      alignSelf: 'flex-start',
      textAlign: 'left',
			fontSize: '0.9rem',
     }}>
     		Tags

	      {tags.map( (tag, index) => (
					<li 
						key={index}
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