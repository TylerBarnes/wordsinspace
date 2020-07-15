import React, {useMemo} from "react"

function filterTags(tags) {
	if (tags===undefined) return null

	return tags.sort((a, b) => a.posts.nodes.length + a.pages.nodes.length < b.posts.nodes.length + b.pages.nodes.length ? 1 : -1)
}

const Tags = (props) => {
	const tags = useMemo(()=> filterTags(props.tags), [props.tags]) 

  return (
     <div style={{
	      textAlign: 'left',
				fontSize: '0.9rem',
				overflow: 'scroll',
				margin: '2vh 0',
				maxHeight: '70vh'
	     }}>
      	<strong>Tags</strong>
	      {tags && tags.map( (tag, index) => (
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
     </div>
   )
}

export default Tags 