import React, {useMemo} from "react"
import {Link} from "gatsby" 

function filterTags(tags) {
	return tags.sort((a, b) => a.posts.nodes.length + a.pages.nodes.length < b.posts.nodes.length + b.pages.nodes.length ? 1 : -1)
}

const TagsMenu = (props) => {
	console.log(props.tags)
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
					<button 
						style={{
							margin: '0 0.2vw', 
              padding: '0.2vh 0.3vw', 
              fontSize: '0.8rem', 
              borderRadius: '10px', 
              border: '1px solid', 
              textAlign: 'center', 
				      background: '#000',
				      color: '#fff'
				     }}>
		          {tag.name} 
		        	<span style={{color: '#aaa', marginLeft: '0.2vw'}}>{tag.posts.nodes.length + tag.pages.nodes.length}</span>
		        </button>
					</li>
	     	))}
     </aside>
   )
}

export default TagsMenu 