import React from "react"

const TagsInfoBox = ({tags, clearTags, isTagMode}) => {
  return (
    <div>
    	<ul 
	    	style={{
					listStyle: 'none',
					margin: '0',
					padding: '0'
	    	}}>
    		{tags.map( tag => tag.checked 
    			? <li 
    					key={tag.id}
		    			style={{
								margin: '0',
								padding: '0',
								lineHeight: '1.4',
								color: 'red', 
								fontSize: '0.5rem'
				    	}}>
				    	{tag.name}
				    </li> 
    			: null)}
    	</ul>
      <button 
      	style={{
					margin: '0',
					padding: '0',
					lineHeight: '1.4',
					fontSize: '0.5rem',
					border: 'none',
					background: 'transparent',
					textAlign: 'right',
					display: isTagMode ? 'block' : 'none'
	    	}}
	    	onClick={clearTags}>
	    	Clear all
	    </button>
    </div>
  )
}

export default TagsInfoBox