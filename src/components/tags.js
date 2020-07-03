import React, {useState} from "react"

function Tags(props) {
	
	const [selectedTag, setSelectedTag] = useState("")
  return (
     <aside style={{
      alignSelf: 'flex-start',
      textAlign: 'left',
			width: `40%`,
			fontSize: '0.9rem',
     }}>
	     {props.tags.nodes.map( tag => (
					<div 
					key={tag.name}
					style={{
			      margin: '10px auto',
					}}		
					>
						<label>
		          <input
		            value={tag.name}
		            type='radio'
		            checked={tag.name === selectedTag}
		            onChange={ e => setSelectedTag(e.target.value)}
		            style={{
						      height: '8px', 
						      margin: '2px',
								}}
		          />
		          {tag.name}
		        </label>
					</div>
	     	))}
     </aside>
   )
}

export default Tags 